// Characteristic function of primes
import {is_prime} from '../utils'
export default function* A010051(): Generator<number> {
  let n = 1
  for (;;) {
    yield +is_prime(n)
    n++
  }
}
