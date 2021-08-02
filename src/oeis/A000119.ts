// Number of representations of n as a sum of distinct Fibonacci numbers.
export default function* A000119(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 3n, 2n, 2n, 3n, 1n, 3n, 3n, 2n, 4n, 2n, 3n, 3n, 1n, 4n, 3n, 3n, 5n, 2n, 4n, 4n, 2n, 5n, 3n, 3n, 4n, 1n, 4n, 4n, 3n, 6n, 3n, 5n, 5n, 2n, 6n, 4n, 4n, 6n, 2n, 5n, 5n, 3n, 6n, 3n, 4n, 4n, 1n, 5n, 4n, 4n, 7n, 3n, 6n, 6n, 3n, 8n, 5n, 5n, 7n, 2n, 6n, 6n, 4n, 8n, 4n, 6n, 6n, 2n, 7n, 5n, 5n, 8n, 3n, 6n, 6n, 3n, 7n, 4n, 4n, 5n, 1n, 5n, 5n, 4n, 8n, 4n, 7n, 7n, 3n, 9n, 6n, 6n, 9n, 3n, 8n, 8n, 5n, ]) {
    yield n
  }
}
