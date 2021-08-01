// Odious numbers
import {decimal_to_binary_digits} from '../utils'
export default function* A000069(): Generator<number> {
  let n = 0
  for (;;) {
    if ((decimal_to_binary_digits(n).match(/1/g) || []).length % 2 === 1) {
      yield n
    }
    n++
  }
}
