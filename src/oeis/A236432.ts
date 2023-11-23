// a(n) = (2n-1)*210; numbers which are 210 times an odd number.
const f = 210n
export default function* A236432(): Generator<bigint> {
  for (let n = f; /*∞*/; n += 2n*f) {
    yield n
  }
}
