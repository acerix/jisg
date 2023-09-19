import { isPrime } from '../utils'

// Characteristic function of primes
export default function* A010051(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    yield isPrime(n) ? 1n : 0n
  }
}
