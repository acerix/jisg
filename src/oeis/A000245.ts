import { factorial } from '../utils'

// a(n) = 3*(2*n)!/((n+2)!*(n-1)!).
export default function* A000245(): Generator<bigint> {
  yield 0n
  for (let n = 1n; /*∞*/; n++) {
    yield 3n * factorial(2n * n) / ( factorial(n + 2n) * factorial(n - 1n) )
  }
}
