// Number of solutions to x^2 - x + 1 == 0 (mod n).
export default function* A000086(): Generator<bigint> {
  for (const n of [1n, 0n, 1n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 2n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 4n, 0n, 2n, 0n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, ]) {
    yield n
  }
}
