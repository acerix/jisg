// Digit sum of n equals the sum of its prime factors
import {digit_sum, prime_factorization} from '../utils'
export default function* A063737(): Generator<number> {
  let n = 2
  for (;;) {
    if (digit_sum(n) === prime_factorization(n, true).reduce((a, b) => a + b, 0)) {
      yield n
    }
    n++
  }
}
