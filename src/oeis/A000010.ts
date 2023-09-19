import { eulerPhi } from '../utils'

// Euler totient of n
export default function* A000010(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    yield eulerPhi(n)
  }
}
