// Mersenne exponents
import {isPrime} from '../utils'
import A000040 from './A000040'
export default function* A000043(): Generator<bigint> {
  for (const n of A000040()) {
    if (isPrime(2n**n - 1n)) {
      yield n
    }
  }
}
