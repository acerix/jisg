// Lucas numbers beginning at 2: L(n) = L(n-1) + L(n-2), L(0) = 2, L(1) = 1.
export default function* A000032(): Generator<bigint> {
  let previous = 2n, current = 1n
  yield previous
  yield current
  for (;;) {
    const sum = current + previous
    previous = current
    current = sum
    yield current
  }
}
