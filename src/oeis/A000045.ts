// Fibonacci numbers
export default function* A000045(): Generator<number> {
  let previous = 0, current = 1
  yield previous
  yield current
  for (;;) {
    const sum = current + previous
    previous = current
    current = sum
    yield current
  }
}
