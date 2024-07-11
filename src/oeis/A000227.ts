// Nearest integer to e^n.
export default function* A000227(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield BigInt(Math.round(Math.exp(Number(n))))
  }
}
