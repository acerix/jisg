import A000040 from './A000040'

// Smallest prime not dividing n.
export default function* A053669(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    for (const p of A000040()) {
      if (n % p !== 0n) {
        yield p
        break
      }
    }
  }
}
