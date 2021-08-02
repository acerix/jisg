// Powers of 7
export default function* A000420(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield n
    n *= 7n
  }
}
