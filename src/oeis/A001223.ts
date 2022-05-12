import A000040 from './A000040'

// Prime gaps
export default function* A001223(): Generator<bigint> {
  const primes = A000040()
  let p = primes.next().value as bigint
  for (const n of primes) {
    yield n - p
    p = n
  }
}
