// Integer part of square root of n. Or, number of positive squares <= n. Or, n appears 2n+1 times.
export default function* A000196(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield BigInt(Math.sqrt(Number(n)) | 0)
  }
}
