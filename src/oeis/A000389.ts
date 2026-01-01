// Binomial coefficients C(n,5).
export default function* A000389(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield (n * (n - 1n) * (n - 2n) * (n - 3n) * (n - 4n)) / 120n
  }
}