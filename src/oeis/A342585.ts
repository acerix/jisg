// Inventory sequence: record the number of zeros thus far in the sequence, then the number of ones thus far, then the number of twos thus far and so on, until a zero is recorded; the inventory then starts again, recording the number of zeros.
export default function* A342585(): Generator<bigint> {
  const counts: number[] = []
  for (let m = 0; ; m++) {
    if (!(m in counts)) {
      counts[m] = 0
    }
    console.log('m', m, counts)
    const result = counts[m]
    console.log('y', result)
    yield BigInt(result)
    console.log(counts)
    if (!(result in counts)) {
      counts[result] = 0
    }
    counts[result]++
    console.log(counts)
    // restart at zero if the result is zero
    if (result === 0) {
      m = -1
      continue
    }
  }
}
