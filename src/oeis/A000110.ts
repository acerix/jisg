// Bell or exponential numbers: number of ways to partition a set of n labeled elements.
export default function* A000110(): Generator<bigint> {
  const row: bigint[] = [1n]
  yield row[0]

  for (let r = 1; ; r++) {
    let oldVal = row[0]
    row[0] = row[r - 1]
    yield row[0]

    for (let c = 1; c <= r; c++) {
      const left = row[c - 1]
      const diag = oldVal
      
      // Preserve the value of row[c] (from previous row) for the next column iteration
      // before we overwrite it. row[c] is undefined when c === r.
      if (c < r) {
        oldVal = row[c]
      }
      
      row[c] = left + diag
    }
  }
}