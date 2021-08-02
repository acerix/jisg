// Product of decimal digits of n
import {digitProduct} from '../utils'
export default function* A007954(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield digitProduct(n)
    n++
  }
}
