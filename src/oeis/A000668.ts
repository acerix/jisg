// Mersenne primes
import { isPrime } from '../utils'
import A000040 from './A000040'
export default function* A000668(): Generator<bigint> {
  for (const n of A000040()) {
    const x = 2n ** n - 1n
    if (isPrime(x)) {
      yield x
    }
  }
}
