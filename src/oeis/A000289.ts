// A nonlinear recurrence: a(n) = a(n-1)^2 - 3*a(n-1) + 3 (for n>1).
export default function* A000289(): Generator<bigint> {
  yield 1n
  let current = 4n
  yield current
  while (true) {
    current = current * current - 3n * current + 3n
    yield current
  }
}