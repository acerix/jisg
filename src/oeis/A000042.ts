// Unary representation of natural numbers
export default function* A000042(): Generator<bigint> {
  for (let t = 1n; /*∞*/; t = 10n * t + 1n) {
    yield t
  }
}
