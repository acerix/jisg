// The squares
export default function* A000290(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield n ** 2n
  }
}
