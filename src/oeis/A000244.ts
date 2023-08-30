// Powers of 3.
export default function* A000244(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield n
    n *= 3n
  }
}
