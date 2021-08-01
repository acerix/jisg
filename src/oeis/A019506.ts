// Hoax numbers
import {is_prime} from '../utils'
import {digit_sum, prime_factorization} from '../utils'
export default function* A019506(): Generator<number> {
  let n = 2
  for (;;) {
    if (!is_prime(n)) {
      const dsum = digit_sum(n)
      let fsum = 0
      for (const i of prime_factorization(n, false)) {
        fsum += digit_sum(i)
      }
      if (dsum === fsum) {
        yield n
      }
    }
    n++
  }
}
