import { factorial } from '../utils'

// Catalan numbers
export default function* A000108(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield factorial(2n * n) / factorial(n + 1n) / factorial(n)
  }
}
