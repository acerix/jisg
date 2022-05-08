// The squares
export default function* A000290(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield n ** 2n
    n++
  }
}
