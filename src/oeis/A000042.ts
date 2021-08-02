// Unary representation of natural numbers
export default function* A000042(): Generator<bigint> {
  let s = ''
  for (;;) {
    s += '1'
    yield BigInt(s)
  }
}
