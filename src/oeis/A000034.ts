// Period 2: repeat [1, 2]; a(n) = 1 + (n mod 2).
export default function* A000034(): Generator<bigint> {
  for (;;) {
    yield 1n
    yield 2n
  }
}
