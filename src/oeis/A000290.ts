// The squares
export default function* A000290(): Generator<number> {
  let n = 0
  for (;;) {
    yield Math.pow(n, 2)
    n++
  }
}
