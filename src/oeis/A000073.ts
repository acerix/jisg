// Tribonacci numbers: a(n) = a(n-1) + a(n-2) + a(n-3) for n >= 3 with a(0) = a(1) = 0 and a(2) = 1.
export default function* A000073(): Generator<bigint> {
  let a0 = 0n, a1 = 0n, a2 = 1n
  yield a0
  yield a1
  yield a2
  for (;;) {
    const sum = a0 + a1 + a2
    a0 = a1
    a1 = a2
    a2 = sum
    yield a2
  }
}
