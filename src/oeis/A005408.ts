// The odd numbers
export default function* A005408(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield n
    n += 2n
  }
}
