// Fibonacci numbers: a(n) = a(n-1) + a(n-2) for n >= 2 with a(0) = 0 and a(1) = 1.
export default function* A000045(): Generator<bigint> {
  let a0 = 0n, a1 = 1n
  yield a0
  yield a1
  for (;;) {
    const sum = a0 + a1
    a0 = a1
    a1 = sum
    yield a1
  }
}
