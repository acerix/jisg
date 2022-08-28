// Square pyramidal numbers
export default function* A000330(): Generator<bigint> {
  let n = 0n,
    sum = 0n
  for (;;) {
    sum += BigInt(Number(n) ** 2)
    yield sum
    n++
  }
}
