// The cubes: a(n) = n^3.
export default function* A000578(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield n**3n
    n++
  }
}
