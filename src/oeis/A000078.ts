// Tetranacci numbers: a(n) = a(n-1) + a(n-2) + a(n-3) + a(n-4) for n >= 4 with a(0) = a(1) = a(2) = 0 and a(3) = 1.
export default function* A000078(): Generator<bigint> {
  let a0 = 0n, a1 = 0n, a2 = 0n, a3 = 1n
  yield a0
  yield a1
  yield a2
  yield a3
  for (;;) {
    const sum = a0 + a1 + a2 + a3
    a0 = a1
    a1 = a2
    a2 = a3
    a3 = sum
    yield a3
  }
}
