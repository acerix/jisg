import { combinations, factorial } from '../utils'

// Coefficients of ménage hit polynomials.
// a(n) = Sum_{k=2..n} (-1)^(k-2) * (2n/(2n-k)) * C(2n-k, k) * (n-k)! * C(k, 2)
export default function* A000033(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    let sum = 0n
    for (let k = 2n; k <= n; k++) {
      const term =
        (2n * n * combinations(2n * n - k, k) * factorial(n - k) * combinations(k, 2n)) /
        (2n * n - k)
      if (k % 2n === 0n) {
        sum += term
      } else {
        sum -= term
      }
    }
    yield sum
  }
}
