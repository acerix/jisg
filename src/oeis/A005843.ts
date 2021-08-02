// The non-negative even numbers
export default function* A005843(): Generator<bigint> {
  let n = 0n
  for (;;) {
    yield n
    n += 2n
  }
}
