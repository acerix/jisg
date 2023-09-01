import A000142 from './A000142'

// a(n) = (n!)!.
export default function* A000197(): Generator<bigint> {
  const g = A000142()
  let i = 0n, v = 0n
  g.next()
  // for each factorial n
  for (const n of A000142()) {
    // traverse the list of factorials until factorial(n)
    while (i < n) {
      i++
      v = g.next().value
    }
    yield v
  }
}
