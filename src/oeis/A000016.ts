import { eulerPhi } from '../utils'

// a(n) = number of distinct (infinite) output sequences from binary n-stage shift register which feeds back the complement of the last stage. E.g., for n=6 there are 6 such sequences.
export default function* A000016(): Generator<bigint> {
  yield 1n // for n=0
  let n = 1n
  while (true) {
    let sum = 0n
    for (let d = 1n; d <= n; d += 2n) {
      if (n % d === 0n) {
        sum += eulerPhi(d) * 2n ** (n / d)
      }
    }
    yield sum / (2n * n)
    n++
  }
}
