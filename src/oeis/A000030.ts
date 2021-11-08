// Initial digit of n.
export default function* A000030(): Generator<bigint> {
  for (let n=0n;;n++) {
    yield BigInt(n.toString()[0])
  }
}
