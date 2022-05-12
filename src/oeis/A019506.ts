import { isPrime, digitSum, primeFactorization } from '../utils'

// Hoax numbers
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
