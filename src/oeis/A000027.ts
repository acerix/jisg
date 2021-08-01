// The positive integers
export default function* A000027(): Generator<number> {
  let n = 1
  for (;;) {
    yield n++
  }
}
