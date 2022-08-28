// The squares
export default function* A000290(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield BigInt(Number(n) ** Number(2n))
    n++
  }
}
