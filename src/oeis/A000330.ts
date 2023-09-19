// Square pyramidal numbers
export default function* A000330(): Generator<bigint> {
  for (let n = 0n, sum = 0n; /*∞*/; n++) {
    sum += BigInt(Number(n) ** 2)
    yield sum
  }
}
