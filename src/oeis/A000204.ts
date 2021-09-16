// Lucas numbers (beginning with 1): L(n) = L(n-1) + L(n-2) with L(1) = 1, L(2) = 3.
export default function* A000204(): Generator<bigint> {
  let previous = 1n, current = 3n
  yield previous
  yield current
  for (;;) {
    const sum = current + previous
    previous = current
    current = sum
    yield current
  }
}
