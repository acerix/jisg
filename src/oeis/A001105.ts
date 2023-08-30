// a(n) = 2*n^2.
export default function* A001105(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield 2n * BigInt(Number(n) ** 2)
  }
}