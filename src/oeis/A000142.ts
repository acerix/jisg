// Factorial numbers
export default function* A000142(): Generator<bigint> {
  let r = 1n
  for (let n = 1n; /*∞*/; n++) {
    yield r
    r *= n
  }
}
