import { yieldPrime } from '../utils'

/**
 * a(n) is the smallest number of straight lines needed to intersect all points (k, prime(k)) for k = 1..n.
 */
export default function* A373813(): Generator<bigint> {
  const points: { x: bigint; y: bigint }[] = []
  const primes = yieldPrime()
  let currentMinLines = 0

  for (let n = 1; ; n++) {
    const p = primes.next().value as bigint
    points.push({ x: BigInt(n), y: p })

    if (n === 1) {
      currentMinLines = 1
    } else {
      while (!canCover(points, currentMinLines)) {
        currentMinLines++
      }
    }
    yield BigInt(currentMinLines)
  }
}

function canCover(points: { x: bigint; y: bigint }[], k: number): boolean {
  const n = points.length
  if (k >= n) return true
  if (k <= 0) return n === 0

  const lines: bigint[] = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let mask = (1n << BigInt(i)) | (1n << BigInt(j))
      const p1 = points[i]
      const p2 = points[j]
      const dx = p2.x - p1.x
      const dy = p2.y - p1.y
      for (let l = 0; l < n; l++) {
        if (l === i || l === j) continue
        const p3 = points[l]
        if ((p3.y - p1.y) * dx === dy * (p3.x - p1.x)) {
          mask |= 1n << BigInt(l)
        }
      }
      lines.push(mask)
    }
  }

  const uniqueLines = Array.from(new Set(lines)).sort((a, b) => {
    const countA = a.toString(2).split('1').length - 1
    const countB = b.toString(2).split('1').length - 1
    return countB - countA
  })

  const linesByPoint: bigint[][] = Array.from({ length: n }, () => [])
  for (const mask of uniqueLines) {
    for (let i = 0; i < n; i++) {
      if ((mask & (1n << BigInt(i))) !== 0n) {
        linesByPoint[i].push(mask)
      }
    }
  }

  const maxCover = uniqueLines.length > 0 ? uniqueLines[0].toString(2).split('1').length - 1 : 1

  function solve(remainingMask: bigint, linesLeft: number, startPoint: number): boolean {
    if (remainingMask === 0n) return true
    if (linesLeft === 0) return false

    // Simple pruning
    let remainingCount = 0
    let tempMask = remainingMask
    while (tempMask > 0n) {
      if (tempMask & 1n) remainingCount++
      tempMask >>= 1n
    }
    if (linesLeft * maxCover < remainingCount) return false

    let p = startPoint
    while (p < n && (remainingMask & (1n << BigInt(p))) === 0n) {
      p++
    }
    if (p === n) return true

    for (const lineMask of linesByPoint[p]) {
      if (solve(remainingMask & ~lineMask, linesLeft - 1, p + 1)) {
        return true
      }
    }
    return false
  }

  return solve((1n << BigInt(n)) - 1n, k, 0)
}
