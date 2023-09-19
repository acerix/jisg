import { isPrime } from '../utils'

// The primes
export default function* A000040(): Generator<bigint> {
  for (let n = 2n; /*∞*/; n++) {
    if (isPrime(n)) {
      yield n
    }
  }
}
