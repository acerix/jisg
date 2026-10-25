// a(n) = (n!)^3.
export default function* A000442(): Generator<bigint> {
  let a = 1n
  yield a
  for (let n = 1n; ; n++) {
    a *= n * n * n
    yield a
  }
}
