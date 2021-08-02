// Number of partitions of n into 5 squares.
export default function* A000174(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 3n, 2n, 1n, 3n, 3n, 3n, 3n, 4n, 3n, 3n, 2n, 2n, 4n, 4n, 4n, 4n, 5n, 3n, 3n, 4n, 3n, 5n, 5n, 5n, 6n, 5n, 3n, 5n, 5n, 5n, 6n, 5n, 6n, 5n, 4n, 4n, 6n, 7n, 6n, 8n, 8n, 7n, 5n, 6n, 5n, 8n, 8n, 4n, 9n, 7n, 6n, 7n, 7n, 8n, 9n, 9n, 7n, 9n, 6n, 7n, 8n, 10n, 9n, 9n, 11n, 7n, 8n, 8n, 8n, 11n, 11n, 9n, 12n, 11n, 7n, 9n, 9n, 12n, 13n, 9n, 10n, 11n, 8n, 6n, 10n, 13n, 13n, 13n, ]) {
    yield n
  }
}
