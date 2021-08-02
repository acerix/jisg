// Number of partitions of n into 2 squares.
export default function* A000161(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 0n, 1n, 1n, 0n, 0n, 1n, 1n, 1n, 0n, 0n, 1n, 0n, 0n, 1n, 1n, 1n, 0n, 1n, 0n, 0n, 0n, 0n, 2n, 1n, 0n, 0n, 1n, 0n, 0n, 1n, 0n, 1n, 0n, 1n, 1n, 0n, 0n, 1n, 1n, 0n, 0n, 0n, 1n, 0n, 0n, 0n, 1n, 2n, 0n, 1n, 1n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 1n, 0n, 0n, 1n, 2n, 0n, 0n, 1n, 0n, 0n, 0n, 1n, 1n, 1n, 0n, 0n, 0n, 0n, 0n, 1n, 1n, 1n, 0n, 0n, 2n, 0n, 0n, 0n, 1n, 1n, 0n, 0n, 0n, 0n, 0n, 0n, 1n, 1n, 0n, 2n, 1n, 0n, 0n, 1n, 0n, 1n, 0n, ]) {
    yield n
  }
}
