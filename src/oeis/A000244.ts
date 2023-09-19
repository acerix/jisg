// Powers of 3.
export default function* A000244(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n *= 3n) {
    yield n
  }
}
