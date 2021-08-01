// Euler totient of n
import {euler_phi} from '../utils'
export default function* A000010(): Generator<number> {
  let n = 1
  for (;;) {
    yield euler_phi(n)
    n++
  }
}
