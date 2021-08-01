// Square pyramidal numbers
export default function* A000330(): Generator<number> {
  let n = 0, sum = 0
  for (;;) {
    sum += Math.pow(n, 2)
    yield sum
    n++
  }
}
