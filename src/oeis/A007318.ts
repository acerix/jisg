// Pascal's triangle read by rows: C(n,k) = binomial(n,k) = n!/(k!*(n-k)!), 0 <= k <= n.
export default function* A007318(): Generator<bigint> {
  for (let r = 1n; /*∞*/; r++) {
    for (let c = 1n, v = 1n; c <= r; c++) {
      yield v
      v = (v * (r - c)) / c
    }
  }
}
