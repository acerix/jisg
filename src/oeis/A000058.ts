// Sylvester's sequence: a(n+1) = a(n)^2 - a(n) + 1, with a(0) = 2.
export default function* A000058(): Generator<bigint> {
  let a = 2n
  yield a
  for (;;) {
    a = a**2n - a + 1n
    yield a
  }
}
