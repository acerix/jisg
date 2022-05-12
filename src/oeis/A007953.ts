import { digitSum } from '../utils'

// Digital sum of n
export default function* A007953(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield digitSum(n)
    n++
  }
}
