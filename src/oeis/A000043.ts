import { isPrime } from '../utils'
import A000040 from './A000040'

// Mersenne exponents
export default function* A000043(): Generator<bigint> {
  for (const n of A000040()) {
    if (isPrime(BigInt(2 ** Number(n)) - 1n)) {
      yield n
    }
  }
}
