import { eulerPhi } from '../utils'

// Number of n-bead binary necklaces with beads of 2 colors where the colors may be swapped but turning over is not allowed
export default function* A000013(): Generator<bigint> {
  yield 1n // n=0
  for (let n = 1n; ; n++) {
    let sum = 0n
    for (let d = 1n; d <= n; d++) {
      if (n % d === 0n) {
        sum += eulerPhi(2n * d) * 2n ** (n / d)
      }
    }
    yield sum / (2n * n)
  }
}
