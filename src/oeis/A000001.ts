// Number of groups of order n
export default function* A000001(): Generator<bigint> {
  for (const n of [0n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 5n, 2n, 2n, 1n, 5n, 1n, 2n, 1n, 14n, 1n, 5n, 1n, 5n, 2n, 2n, 1n, 15n, 2n, 2n, 5n, 4n, 1n, 4n, 1n, 51n, 1n, 2n, 1n, 14n, 1n, 2n, 2n, 14n, 1n, 6n, 1n, 4n, 2n, 2n, 1n, 52n, 2n, 5n, 1n, 5n, 1n, 15n, 2n, 13n, 2n, 2n, 1n, 13n, 1n, 2n, 4n, 267n, 1n, 4n, 1n, 5n, 1n, 4n, 1n, 50n, 1n, 2n, 3n, 4n, 1n, 6n, 1n, 52n, 15n, 2n, 1n, 15n, 1n, 2n, 1n, 12n, 1n, 10n, 1n, 4n, 2n, ]) {
    yield n
  }
}
