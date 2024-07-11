// a(n) = 2^n - n - 2.
export default function* A000247(): Generator<bigint> {
  for (let n = 2n; /*∞*/; n++) {
    yield 2n ** n - n - 2n
  }
}
