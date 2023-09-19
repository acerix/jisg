import { decimalToBinaryDigits } from '../utils'

// Odious numbers
export default function* A000069(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    if ((decimalToBinaryDigits(n).match(/1/g) || []).length % 2 === 1) {
      yield n
    }
  }
}
