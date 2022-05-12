import { isPrime } from '../utils'

// Characteristic function of primes
export default function* A010051(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield isPrime(n) ? 1n : 0n
    n++
  }
}
