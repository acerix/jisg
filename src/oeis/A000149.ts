// a(n) = floor(e^n).
export default function* A000149(): Generator<bigint> {
  for (let n = 1; /*∞*/; n *= Math.E) {
    yield BigInt(Math.floor(n))
  }
}
