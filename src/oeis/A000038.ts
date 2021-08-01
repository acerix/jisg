// Twice A000007.
export default function* A000038(): Generator<number> {
  yield 2
  for (;;) {
    yield 0
  }
}
