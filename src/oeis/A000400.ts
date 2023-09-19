// Powers of 6
export default function* A000400(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n *= 6n) {
    yield n
  }
}
