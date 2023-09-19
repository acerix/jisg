// The positive integers
export default function* A000027(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    yield n
  }
}
