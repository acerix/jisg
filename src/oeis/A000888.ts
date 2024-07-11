import { factorial } from '../utils'

// a(n) = (2*n)!^2 / ((n+1)!*n!^3).
export default function* A000888(): Generator<bigint> {
  yield 1n
  for (let n = 1n; /*∞*/; n++) {
    yield factorial(2n * n) ** 2n / ( factorial(n + 1n) * factorial(n) ** 3n )
  }
}
