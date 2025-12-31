import { gcd } from '../utils'

// Number of classes of primitive positive definite binary quadratic forms of discriminant D = -4n
export default function* A000003(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    let count = 0n
    for (let k = 0n; ; k++) {
      const b = 2n * k
      if (3n * b * b > 4n * n) break

      const m = n + k * k
      for (let a = 1n; a * a <= m; a++) {
        if (m % a === 0n) {
          const c = m / a
          if (b <= a && a <= c) {
            if (gcd(a, gcd(b, c)) === 1n) {
              if (b === a || a === c || b === 0n) {
                count += 1n
              } else {
                count += 2n
              }
            }
          }
        }
      }
    }
    yield count
  }
}
