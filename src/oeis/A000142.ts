// Factorial numbers
export default function* A000142(): Generator<number> {
  let n = 1, r = 1
  for (;;) {
    yield r
    r *= n
    n++
  }
}
