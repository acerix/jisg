// Euler totient of n
import {eulerPhi} from '../utils'
export default function* A000010(): Generator<bigint> {
  for (let n=1n;;n++) {
    yield eulerPhi(n)
  }
}
