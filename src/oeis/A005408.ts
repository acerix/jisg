// The odd numbers
export default function* A005408(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n += 2n) {
    yield n
  }
}
