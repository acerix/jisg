// a(n) = 2^n - 1. (Sometimes called Mersenne numbers, although that name is usually reserved for A001348.)
export default function* A000225(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield 2n ** n - 1n
  }
}