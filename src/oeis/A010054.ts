// n is triangular
export default function* A010054(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield 1n
    for (let i = 0; i < n; i++) {
      yield 0n
    }
  }
}
