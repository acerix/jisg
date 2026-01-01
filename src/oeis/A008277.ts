// Triangle of Stirling numbers of the second kind, S2(n,k), n >= 1, 1 <= k <= n.
export default function* A008277(): Generator<bigint> {
  let row: bigint[] = []
  for (let n = 1; ; n++) {
    const nextRow: bigint[] = new Array(n)
    nextRow[0] = 1n
    nextRow[n - 1] = 1n
    for (let k = 2; k < n; k++) {
      nextRow[k - 1] = BigInt(k) * row[k - 1] + row[k - 2]
    }
    row = nextRow
    for (const val of row) {
      yield val
    }
  }
}
