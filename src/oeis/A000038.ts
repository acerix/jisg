// Twice A000007.
export default function* A000038(): Generator<bigint> {
  yield 2n
  for (;;) {
    yield 0n
  }
}
