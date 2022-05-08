// Triangular numbers
export default function* A000217(): Generator<bigint> {
  let n = 0n,
    sum = 0n
  for (;;) {
    sum += n
    yield sum
    n++
  }
}
