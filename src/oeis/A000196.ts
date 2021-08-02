// Integer part of square root of n. Or, number of positive squares <= n. Or, n appears 2n+1 times.
export default function* A000196(): Generator<bigint> {
  for (const n of [0n, 1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 3n, 3n, 3n, 3n, 3n, 3n, 3n, 4n, 4n, 4n, 4n, 4n, 4n, 4n, 4n, 4n, 5n, 5n, 5n, 5n, 5n, 5n, 5n, 5n, 5n, 5n, 5n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 6n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 7n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 9n, 10n, 10n, ]) {
    yield n
  }
}
