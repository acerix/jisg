// Inventory sequence: record the number of zeros thus far in the sequence, then the number of ones thus far, then the number of twos thus far and so on, until a zero is recorded; the inventory then starts again, recording the number of zeros.
export default function* A342585(): Generator<bigint> {
  const counts: number[] = []
  for (let m = 0; /*∞*/; m++) {
    if (!(m in counts)) {
      counts[m] = 0
    }
    const result = counts[m]
    yield BigInt(result)
    if (!(result in counts)) {
      counts[result] = 0
    }
    counts[result]++
    if (result === 0) {
      m = -1
      continue
    }
  }
}
