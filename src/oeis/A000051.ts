// a(n) = 2^n + 1.
export default function* A000051(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield BigInt(2 ** Number(n)) + 1n
    n++
  }
}
