// 1's-counting sequence: number of 1's in binary expansion of n (or the binary weight of n).
export default function* A000120(): Generator<bigint> {
  for (const n of [0n, 1n, 1n, 2n, 1n, 2n, 2n, 3n, 1n, 2n, 2n, 3n, 2n, 3n, 3n, 4n, 1n, 2n, 2n, 3n, 2n, 3n, 3n, 4n, 2n, 3n, 3n, 4n, 3n, 4n, 4n, 5n, 1n, 2n, 2n, 3n, 2n, 3n, 3n, 4n, 2n, 3n, 3n, 4n, 3n, 4n, 4n, 5n, 2n, 3n, 3n, 4n, 3n, 4n, 4n, 5n, 3n, 4n, 4n, 5n, 4n, 5n, 5n, 6n, 1n, 2n, 2n, 3n, 2n, 3n, 3n, 4n, 2n, 3n, 3n, 4n, 3n, 4n, 4n, 5n, 2n, 3n, 3n, 4n, 3n, 4n, 4n, 5n, 3n, 4n, 4n, 5n, 4n, 5n, 5n, 6n, 2n, 3n, 3n, 4n, 3n, 4n, 4n, 5n, 3n, ]) {
    yield n
  }
}
