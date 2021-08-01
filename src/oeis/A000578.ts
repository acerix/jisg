// The cubes: a(n) = n^3.
export default function* A000578(): Generator<number> {
  let n = 0
  for (;;) {
    yield Math.pow(n, 3)
    n++
  }
}
