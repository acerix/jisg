// Recamán's sequence (or Recaman's sequence): a(0) = 0; for n > 0, a(n) = a(n-1) - n if nonnegative and not already in the sequence, otherwise a(n) = a(n-1) + n.
export default function* A005132(): Generator<bigint> {
  const visited = new Set<bigint>()
  let current = 0n
  let n = 0n

  visited.add(current)
  yield current

  while (true) {
    n += 1n
    const nextSub = current - n
    if (nextSub >= 0n && !visited.has(nextSub)) {
      current = nextSub
    } else {
      current = current + n
    }
    visited.add(current)
    yield current
  }
}