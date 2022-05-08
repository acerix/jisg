// n appears n times
export default function* A002024(): Generator<bigint> {
  let n = 1n
  for (;;) {
    for (let x = 0; x < n; x++) {
      yield n
    }
    n++
  }
}
