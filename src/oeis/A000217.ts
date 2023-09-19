// Triangular numbers
export default function* A000217(): Generator<bigint> {
  for (let n = 0n, sum = 0n; /*∞*/; n++) {
    sum += n
    yield sum
  }
}
