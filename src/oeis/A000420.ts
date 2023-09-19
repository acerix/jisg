// Powers of 7
export default function* A000420(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n *= 7n) {
    yield n
  }
}
