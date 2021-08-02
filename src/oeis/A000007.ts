// The characteristic function of {0}: a(n) = 0^n.
export default function* A000007(): Generator<bigint> {
  yield 1n
  for (;;) {
    yield 0n
  }
}
