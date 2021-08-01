// Number of partitions of n into 3 squares (allowing part zero).
export default function* A000164(): Generator<number> {
  for (const n of [1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 0, 1, 2, 2, 1, 1, 1, 1, 0, 1, 2, 2, 2, 0, 2, 1, 0, 1, 2, 2, 1, 2, 1, 2, 0, 1, 3, 1, 1, 1, 2, 1, 0, 1, 2, 3, 2, 1, 2, 3, 0, 1, 2, 1, 2, 0, 2, 2, 0, 1, 3, 3, 1, 2, 2, 1, 0, 2, 2, 3, 2, 1, 2, 1, 0, 1, 4, 2, 2, 1, 2, 3, 0, 1, 4, 3, 1, 0, 1, 2, 0, 1, 2, 3, 3, 2, 4, 2, 0, 2, ]) {
    yield n
  }
}
