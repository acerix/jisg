// Kolakoski sequence
export default function* A000002(): Generator<bigint> {
  yield 1n
  yield 2n
  yield 2n
  const g = A000002()
  g.next()
  g.next()
  let p = true
  for (const r of g) {
    p = !p
    for (let i = 0n; i < r; i++) {
      yield p ? 2n : 1n
    }
  }
}
