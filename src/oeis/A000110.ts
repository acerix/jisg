// Bell or exponential numbers: number of ways to partition a set of n labeled elements.
export default function* A000110(): Generator<bigint> {
  const row = [1n]
  yield row[0] as bigint
  for (let r = 1; ; r++) {
    let old = row[0] as bigint
    row[0] = row[r - 1] as bigint
    yield row[0]
    for (let c = 1; c <= r; c++) {
      const left = row[c - 1] as bigint
      const diag = old
      old = row[c] as bigint
      row[c] = left + diag
    }
  }
}
