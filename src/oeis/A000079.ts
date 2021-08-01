// Powers of 2
export default function* A000079(): Generator<number> {
  let n = 0
  for (;;) {
    yield Math.pow(2, n)
    n++
  }
}
