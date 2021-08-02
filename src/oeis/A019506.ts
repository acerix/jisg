// Hoax numbers
import {isPrime} from '../utils'
import {digitSum, primeFactorization} from '../utils'
export default function* A019506(): Generator<bigint> {
  let n = 2n
  for (;;) {
    if (!isPrime(n)) {
      const dsum = digitSum(n)
      let fsum = 0n
      for (const i of primeFactorization(n, false)) {
        fsum += digitSum(i)
      }
      if (dsum === fsum) {
        yield n
      }
    }
    n++
  }
}
