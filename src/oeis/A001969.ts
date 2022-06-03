import { decimalToBinaryDigits } from '../utils'

// Evil numbers: nonnegative integers with an even number of 1's in their binary expansion.
export default function* A001969(): Generator<bigint> {
  let n = 0n
  for (;;) {
    if ((decimalToBinaryDigits(n).match(/1/g) || []).length % 2 === 0) {
      yield n
    }
    n++
  }
}
