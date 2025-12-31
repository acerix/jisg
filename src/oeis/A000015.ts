import { isPrimePower } from '../utils'

// Smallest prime power >= n.
export default function* A000015(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    for (let m = n; ; m++) {
      if (isPrimePower(m)) {
        yield m
        break
      }
    }
  }
}
