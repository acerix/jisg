// Prime gaps
import A000040 from './A000040'
export default function* A001223(): Generator<number> {
  const primes = A000040()
  let p = primes.next().value as number
  for (const n of primes) {
    yield n - p
    p = n
  }
}
