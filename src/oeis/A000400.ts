// Powers of 6
export default function* A000400(): Generator<bigint> {
  let n = 1n
  for (;;) {
    yield n
    n *= 6n
  }
}
