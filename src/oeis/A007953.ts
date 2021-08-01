// Digital sum of n
import {digit_sum} from '../utils'
export default function* A007953(): Generator<number> {
  let n = 0
  for (;;) {
    yield digit_sum(n)
    n++
  }
}
