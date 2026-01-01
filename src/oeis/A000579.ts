// Figurate numbers or binomial coefficients C(n,6).
export default function* A000579(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield (n * (n - 1n) * (n - 2n) * (n - 3n) * (n - 4n) * (n - 5n)) / 720n
  }
}