// Tetrahedral (or triangular pyramidal) numbers: a(n) = C(n+2,3) = n*(n+1)*(n+2)/6.
export default function* A000292(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield (n * (n + 1n) * (n + 2n)) / 6n
  }
}