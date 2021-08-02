// The primes
import {isPrime} from '../utils'
export default function* A000040(): Generator<bigint> {
  let n = 2n
  for (;;) {
    if (isPrime(n)) {
      yield n
    }
    n++
  }
}
