// Number of representations of n as a sum of Fibonacci numbers (1 is allowed twice as a part).
export default function* A000121(): Generator<bigint> {
  for (const n of [1n, 2n, 2n, 3n, 3n, 3n, 4n, 3n, 4n, 5n, 4n, 5n, 4n, 4n, 6n, 5n, 6n, 6n, 5n, 6n, 4n, 5n, 7n, 6n, 8n, 7n, 6n, 8n, 6n, 7n, 8n, 6n, 7n, 5n, 5n, 8n, 7n, 9n, 9n, 8n, 10n, 7n, 8n, 10n, 8n, 10n, 8n, 7n, 10n, 8n, 9n, 9n, 7n, 8n, 5n, 6n, 9n, 8n, 11n, 10n, 9n, 12n, 9n, 11n, 13n, 10n, 12n, 9n, 8n, 12n, 10n, 12n, 12n, 10n, 12n, 8n, 9n, 12n, 10n, 13n, 11n, 9n, 12n, 9n, 10n, 11n, 8n, 9n, 6n, 6n, 10n, 9n, ]) {
    yield n
  }
}
