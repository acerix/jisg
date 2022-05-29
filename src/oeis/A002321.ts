import A008683 from './A008683'

// Mertens's function: Sum_{k=1..n} mu(k), where mu is the Moebius function A008683.
export default function* A002321(): Generator<bigint> {
  let Σ = 0n
  for (const n of A008683()) {
    yield (Σ += n)
  }
}
