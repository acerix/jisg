import { factorial } from '../utils'

export default function* A000435(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    if (n === 1n) {
      yield 0n
      continue
    }
    let sum = 0n
    const factNMinus1 = factorial(n - 1n)
    for (let k = 0n; k <= n - 2n; k++) {
      sum += (n ** k * factNMinus1) / factorial(k)
    }
    yield sum
  }
}