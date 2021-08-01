// Powers of 6
export default function* A000400(): Generator<number> {
  let n = 1
  for (;;) {
    yield n
    n *= 6
  }
}
