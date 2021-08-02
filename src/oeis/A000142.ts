// Factorial numbers
export default function* A000142(): Generator<bigint> {
  let n = 1n, r = 1n
  for (;;) {
    yield r
    r *= n
    n++
  }
}
