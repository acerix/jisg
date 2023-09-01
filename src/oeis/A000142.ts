// Factorial numbers
export default function* A000142(): Generator<bigint> {
  for (let n = 1n, r = 1n; ; n++) {
    yield r
    r *= n
  }
}
