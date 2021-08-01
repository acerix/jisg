// The odd numbers
export default function* A005408(): Generator<number> {
  let n = 1
  for (;;) {
    yield n
    n += 2
  }
}
