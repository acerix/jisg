// Fibonacci numbers
export default function* A000045(): Generator<bigint> {
  let previous = 0n,
    current = 1n
  yield previous
  yield current
  for (;;) {
    const sum = current + previous
    previous = current
    current = sum
    yield current
  }
}
