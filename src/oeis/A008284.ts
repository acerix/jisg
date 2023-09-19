// Triangle of partition numbers: T(n,k) = number of partitions of n in which the greatest part is k, 1 <= k <= n. Also number of partitions of n into k positive parts, 1 <= k <= n.

function T(n: bigint, k: bigint): bigint {
  if (k < 1n || k > n) return 0n
  if (k === 1n || k === n) return 1n
  return T(n-1n, k-1n) + T(n-k, k)
}

export default function* A008284(): Generator<bigint> {
  for (let n=1n; /*∞*/; n++) {
    for (let k=1n; k<=n; k++) {
      yield T(n, k)
    }
  }
}
