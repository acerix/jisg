// The primes
import {is_prime} from '../utils'
export default function* A000040(): Generator<number> {
  let n = 2
  for (;;) {
    if (is_prime(n)) {
      yield n
    }
    n++
  }
}
