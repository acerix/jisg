// Initial digit of n.
export default function* A000030(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    const s = n.toString()
    yield BigInt(s[0])
  }
}
