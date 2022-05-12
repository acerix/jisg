import { isPrime } from '../utils'
import { digitSum, primeFactorization } from '../utils'

// Smith numbers
export default function* A006753(): Generator<bigint> {
  let n = 2n
  for (;;) {
    if (!isPrime(n)) {
      const dsum = digitSum(n)
      let fsum = 0n
      for (const i of primeFactorization(n, true)) {
        fsum += digitSum(i)
      }
      if (dsum === fsum) {
        yield n
      }
    }
    n++
  }
}
