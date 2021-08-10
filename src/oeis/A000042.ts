// Unary representation of natural numbers
export default function* A000042(): Generator<bigint> {
  let t = 0n
  for (;;) {
    t = 10n * t + 1n
    yield t
  }
}
