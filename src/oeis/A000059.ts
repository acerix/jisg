import { isPrime } from '../utils'

// Numbers n such that (2n)^4 + 1 is prime.
export default function* A000059(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    if (isPrime(BigInt((2 * Number(n)) ** 4) + 1n)) yield n
  }
}
