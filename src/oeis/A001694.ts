import { primeFactorization } from '../utils'

// Powerful numbers, definition (1): if a prime p divides n then p^2 must also divide n (also called squareful, square full, square-full or 2-powerful numbers).
export default function* A001694(): Generator<bigint> {
  forEachN: for (let n = 1n; ; n++) {
    for (const i of primeFactorization(n)) {
      const i2 = i ** 2n
      if (i2 > n || n % i2 !== 0n) {
        continue forEachN
      }
    }
    yield n
  }
}
