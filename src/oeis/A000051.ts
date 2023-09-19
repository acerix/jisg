// a(n) = 2^n + 1.
export default function* A000051(): Generator<bigint> {
  for (let n = 0n; ; n++) {
    yield BigInt(2 ** Number(n)) + 1n
  }
}
