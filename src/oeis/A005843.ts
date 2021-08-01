// The nonnegative even numbers
export default function* A005843(): Generator<number> {
  let n = 0
  for (;;) {
    yield n
    n += 2
  }
}
