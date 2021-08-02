// Number of partitions of n into 6 squares.
export default function* A000177(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 3n, 2n, 2n, 3n, 3n, 3n, 2n, 3n, 4n, 4n, 3n, 5n, 5n, 4n, 3n, 4n, 5n, 5n, 5n, 5n, 7n, 6n, 4n, 5n, 6n, 6n, 6n, 9n, 7n, 8n, 6n, 6n, 9n, 7n, 7n, 9n, 10n, 8n, 7n, 7n, 9n, 10n, 9n, 11n, 12n, 13n, 8n, 10n, 11n, 10n, 11n, 11n, 12n, 13n, 11n, 9n, 14n, 13n, 12n, 16n, 14n, 14n, 12n, 13n, 13n, 15n, 15n, 15n, 18n, 16n, 13n, 14n, 18n, 15n, 17n, 20n, 17n, 21n, 15n, 15n, ]) {
    yield n
  }
}
