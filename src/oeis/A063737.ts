import { digitSum, primeFactorization } from '../utils'

// Digit sum of n equals the sum of its prime factors
export default function* A063737(): Generator<bigint> {
  let n = 2n
  for (;;) {
    if (
      digitSum(n) === primeFactorization(n, true).reduce((a, b) => a + b, 0n)
    ) {
      yield n
    }
    n++
  }
}
