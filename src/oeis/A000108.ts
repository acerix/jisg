// Catalan numbers
import {factorial} from '../utils'
export default function* A000108(): Generator<number> {
  let n = 0n
  for (;;) {
    yield Number(factorial(2n*n)) / Number(factorial(n+1n)) / Number(factorial(n))
    n++
  }
}
