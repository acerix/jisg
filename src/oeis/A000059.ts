// Numbers n such that (2n)^4 + 1 is prime.
import {isPrime} from '../utils'
export default function* A000059(): Generator<bigint> {
  let n = 1n
  for (;;) {
    if (isPrime((2n * n)**4n + 1n)) {
      yield n
    }
    n++
  }
}
