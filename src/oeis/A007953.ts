import { digitSum } from '../utils'

// Digital sum of n
export default function* A007953(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield digitSum(n)
  }
}
