// Euler totient of n
import {eulerPhi} from '../utils'
export default function* A000010(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield eulerPhi(n)
    n++
  }
}
