// Product of decimal digits of n
import {digit_product} from '../utils'
export default function* A007954(): Generator<number> {
  let n = 0
  for (;;) {
    yield digit_product(n)
    n++
  }
}
