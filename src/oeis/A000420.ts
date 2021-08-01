// Powers of 7
export default function* A000420(): Generator<number> {
  let n = 1
  for (;;) {
    yield n
    n *= 7
  }
}
