// The positive integers
export default function* A000027(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield n++
  }
}
