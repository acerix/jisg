// n appears n times
export default function* A002024(): Generator<number> {
  let n = 1
  for (;;) {
    for (let x=0; x<n; x++) {
      yield n
    }
    n++
  }
}
