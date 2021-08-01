// Unary representation of natural numbers
export default function* A000042(): Generator<number> {
  let s = ''
  for (;;) {
    s += '1'
    yield Number(s)
  }
}
