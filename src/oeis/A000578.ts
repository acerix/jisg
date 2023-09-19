// The cubes: a(n) = n^3.
export default function* A000578(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield n ** 3n
  }
}
