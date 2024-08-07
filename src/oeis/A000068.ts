import { isPrime } from '../utils'

// Numbers n such that n^4 + 1 is prime.
export default function* A000068(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    if (isPrime(BigInt(Number(n) ** 4) + 1n)) yield n
  }
}
