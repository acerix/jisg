import A000013 from './A000013'

// Number of n-bead necklaces (turning over is allowed) where complements are equivalent
export default function* A000011(): Generator<bigint> {
  const g = A000013()
  for (let n = 0n; ; n++) {
    const term = g.next().value
    yield (term + 2n ** (n / 2n)) / 2n
  }
}
