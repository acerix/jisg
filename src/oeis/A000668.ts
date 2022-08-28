import { isPrime } from '../utils'
import A000040 from './A000040'

// Mersenne primes
export default function* A000668(): Generator<bigint> {
  for (const n of A000040()) {
    const x = BigInt(2 ** Number(n)) - 1n
    if (isPrime(x)) {
      yield x
    }
  }
}
