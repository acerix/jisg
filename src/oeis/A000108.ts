// Catalan numbers
import {factorial} from '../utils'
export default function* A000108(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield factorial(2n*n) / factorial(n+1n) / factorial(n)
    n++
  }
}
