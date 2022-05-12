import A000045 from './A000045'

// a(n) = Fibonacci(n) - 1
export default function* A000071(): Generator<bigint> {
  const g = A000045()
  g.next()
  for (const n of g) {
    yield n - 1n
  }
}
