// The non-negative even numbers
export default function* A005843(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n += 2n) {
    yield n
  }
}
