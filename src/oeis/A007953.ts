// Digital sum of n
import {digitSum} from '../utils'
export default function* A007953(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield digitSum(n)
    n++
  }
}
