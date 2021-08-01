// Triangular numbers
export default function* A000217(): Generator<number> {
  let n = 0, sum = 0
  for (;;) {
    sum += n
    yield sum
    n++
  }
}
