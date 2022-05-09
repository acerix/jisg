// a(n) is the number of partitions of n (the partition numbers).
import A000203 from './A000203'
export default function* A000041(): Generator<bigint> {
  yield 1n
  const sigmaGenerator = A000203()
  const sigmaMemo: bigint[] = []
  function sigma(n: number) {
    if (n in sigmaMemo) {
      return sigmaMemo[n]
    }
    sigmaMemo[n] = sigmaGenerator.next().value as bigint
    return sigmaMemo[n]
  }
  const p = [1n]
  for (let n = 1; ; n++) {
    p[n] = 0n
    for (let j = 1; j <= n; j++) {
      p[n] += (p[n - j] as bigint) * (sigma(j) as bigint)
    }
    p[n] /= BigInt(n)
    yield p[n] as bigint
  }
}
