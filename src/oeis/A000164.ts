// Number of partitions of n into 3 squares (allowing part zero).
export default function* A000164(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 1n, 1n, 1n, 0n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 0n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 0n, 1n, 2n, 2n, 2n, 0n, 2n, 1n, 0n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 0n, 1n, 3n, 1n, 1n, 1n, 2n, 1n, 0n, 1n, 2n, 3n, 2n, 1n, 2n, 3n, 0n, 1n, 2n, 1n, 2n, 0n, 2n, 2n, 0n, 1n, 3n, 3n, 1n, 2n, 2n, 1n, 0n, 2n, 2n, 3n, 2n, 1n, 2n, 1n, 0n, 1n, 4n, 2n, 2n, 1n, 2n, 3n, 0n, 1n, 4n, 3n, 1n, 0n, 1n, 2n, 0n, 1n, 2n, 3n, 3n, 2n, 4n, 2n, 0n, 2n, ]) {
    yield n
  }
}
