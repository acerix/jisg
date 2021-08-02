// Kolakoski sequence
export default function* A000002(): Generator<bigint> {
  for (const n of [1n, 2n, 2n]) {
    yield n
  }
  let p = true
  const g = A000002()
  g.next()
  g.next()
  for (const r of g) {
    p = !p
    for (let i=0n; i<r; i++) {
      yield p ? 2n : 1n
    }
  }
}
