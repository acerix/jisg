// Mersenne exponents
import {is_prime} from '../utils'
import A000040 from './A000040'
export default function* A000043(): Generator<number> {
  for (const n of A000040()) {
    if (is_prime(Math.pow(2, n) - 1)) {
      yield n
    }
  }
}
