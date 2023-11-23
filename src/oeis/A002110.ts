import A000040 from './A000040'

// Primorial numbers (first definition): product of first n primes. Sometimes written prime(n)#.
export default function* A002110(): Generator<bigint> {
  let v = 1n
  yield v
  for (const n of A000040()) {
    yield v *= n
  }
}
