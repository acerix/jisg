// n is triangular
export default function* A010054(): Generator<number> {
  let n = 0
  for (;;) {
    yield 1
    for (let i=0; i<n; i++) {
      yield 0
    }
    n++
  }
}
