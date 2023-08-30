// a(n) = floor(e^n).
export default function* A000149(): Generator<bigint> {
  let n = 1
  for (;;) {
    yield BigInt(Math.floor(n))
    n *= Math.E
  }
}
