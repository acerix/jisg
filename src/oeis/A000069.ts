// Odious numbers
import {decimalToBinaryDigits} from '../utils'
export default function* A000069(): Generator<bigint> {
  let n = 0n
  for (;;) {
    if ((decimalToBinaryDigits(n).match(/1/g) || []).length % 2 === 1) {
      yield n
    }
    n++
  }
}
