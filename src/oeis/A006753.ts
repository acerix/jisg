import { isPrime, digitSum, primeFactorization } from '../utils'

// Smith numbers
export default function* A006753(): Generator<bigint> {
  for (let n = 2n; /*∞*/; n++) {
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
  }
}
