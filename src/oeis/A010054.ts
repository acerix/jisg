// n is triangular
export default function* A010054(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield 1n
    for (let i=0; i<n; i++) {
      yield 0n
    }
    n++
  }
}
