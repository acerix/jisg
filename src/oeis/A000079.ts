// Powers of 2
export default function* A000079(): Generator<bigint> {
  let n = 1n
  yield n
  for (;;) {
    yield n<<=1n
  }
}
