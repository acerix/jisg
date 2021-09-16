// a(n) = Fibonacci(n) - 1
import A000045 from './A000045'
export default function* A000071(): Generator<bigint> {
  const g = A000045()
  g.next()
  for (const n of g) {
    yield n - 1n
  }
}
