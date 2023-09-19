import { digitProduct } from '../utils'

// Product of decimal digits of n
export default function* A007954(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield digitProduct(n)
  }
}
