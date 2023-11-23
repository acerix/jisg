// n occurs n! times.
export default function* A084556(): Generator<bigint> {
  yield 0n
  let f = 1n
  for (let n = 1n; /*∞*/; n++) {
    f *= n
    for (let c = 0n; c < f; c++) {
      yield n
    }
  }
}
