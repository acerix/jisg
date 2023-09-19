// Triangle of partition numbers: T(n,k) = number of partitions of n in which the greatest part is k, 1 <= k <= n. Also number of partitions of n into k positive parts, 1 <= k <= n.

function T(n: number, k: number): number {
  if (k < 1 || k > n) return 0
  if (k === 1 || k === n) return 1
  return T(n-1, k-1) + T(n-k, k)
}

export default function* A008284(): Generator<bigint> {
  for (let n=1; /"*∞*"/; n++) {
    for (let k=1; k<=n; k++) {
      yield BigInt(T(n, k))
    }
  }
}
