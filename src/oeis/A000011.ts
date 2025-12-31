import { eulerPhi } from '../utils'

// Number of n-bead necklaces (turning over is allowed) where complements are equivalent
export default function* A000011(): Generator<bigint> {
  yield 1n // n=0
  for (let n = 1n; ; n++) {
    let sum = 0n
    for (let d = 1n; d <= n; d++) {
      if (n % d === 0n) {
        sum += eulerPhi(2n * d) * 2n ** (n / d)
      }
    }
    const a000013 = sum / (2n * n)
    yield (a000013 + 2n ** (n / 2n)) / 2n
  }
}
