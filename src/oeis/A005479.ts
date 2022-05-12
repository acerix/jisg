import { isPrime } from '../utils'
import A000032 from './A000032'

// Prime Lucas numbers
export default function* A005479(): Generator<bigint> {
  for (const n of A000032()) {
    if (isPrime(n)) {
      yield n
    }
  }
}
