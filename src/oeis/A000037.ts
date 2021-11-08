// Numbers that are not squares (or, the nonsquares).
import squares from './A000290'
export default function* A000037(): Generator<bigint> {
  let n = 0n
  for (const s of squares()) {
    while (n < s) {
      yield n
      n++
    }
    n++
  }
}
