// Catalan numbers
import {factorial} from '../utils'
export default function* A000108(): Generator<number> {
  let n = 0
  for (;;) {
    yield factorial(2*n) / factorial(n+1) / factorial(n)
    n++
  }
}
