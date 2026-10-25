// Numbers that are the sum of 2 squares in exactly 3 ways.
export default function* A000443(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    let count = 0
    for (let x = 0n; x * x * 2n <= n; x++) {
      const rem = n - x * x
      const y = isqrt(rem)
      if (y * y === rem) {
        count++
      }
    }
    if (count === 3) {
      yield n
    }
  }
}

function isqrt(value: bigint): bigint {
  if (value < 0n) return -1n
  if (value === 0n) return 0n
  let x0 = value / 2n
  if (x0 !== 0n) {
    let x1 = (x0 + value / x0) / 2n
    while (x1 < x0) {
      x0 = x1
      x1 = (x0 + value / x0) / 2n
    }
    return x0
  }
  return 1n
}
