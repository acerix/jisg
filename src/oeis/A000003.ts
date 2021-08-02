// Number of classes of primitive positive definite binary quadratic forms of discriminant D = -4n
export default function* A000003(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 3n, 2n, 2n, 4n, 2n, 2n, 4n, 2n, 3n, 4n, 4n, 2n, 3n, 4n, 2n, 6n, 3n, 2n, 6n, 4n, 3n, 4n, 4n, 4n, 6n, 4n, 2n, 6n, 4n, 4n, 8n, 4n, 3n, 6n, 4n, 4n, 5n, 4n, 4n, 6n, 6n, 4n, 6n, 6n, 4n, 8n, 4n, 2n, 9n, 4n, 6n, 8n, 4n, 4n, 8n, 8n, 3n, 8n, 8n, 4n, 7n, 4n, 4n, 10n, 6n, 6n, 8n, 4n, 5n, 8n, 6n, 4n, 9n, 8n, 4n, 10n, 6n, 4n, 12n, 8n, 6n, 6n, 4n, 8n, 8n, 8n, 4n, 8n, 6n, 4n, ]) {
    yield n
  }
}
