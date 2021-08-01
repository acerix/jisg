// The characteristic function of {0}: a(n) = 0^n.
export default function* A000007(): Generator<number> {
  yield 1
  for (;;) {
    yield 0
  }
}
