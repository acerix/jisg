// Integer part of square root of n-th prime
import A000040 from './A000040'
export default function* A000006(): Generator<number> {
  for (const n of A000040()) {
    yield Math.floor(Math.sqrt(n))
  }
}
