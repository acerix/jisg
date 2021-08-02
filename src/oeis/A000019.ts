// Number of primitive permutation groups of degree n.
export default function* A000019(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 5n, 4n, 7n, 7n, 11n, 9n, 8n, 6n, 9n, 4n, 6n, 22n, 10n, 4n, 8n, 4n, 9n, 4n, 7n, 5n, 28n, 7n, 15n, 14n, 8n, 4n, 12n, 7n, 4n, 2n, 6n, 22n, 11n, 4n, 2n, 8n, 10n, 4n, 10n, 4n, 9n, 2n, 6n, 4n, 40n, 9n, 2n, 3n, 8n, 4n, 8n, 9n, 5n, 2n, 6n, 9n, 14n, 4n, 8n, 74n, 13n, 7n, 10n, 7n, 2n, 2n, 10n, 4n, 16n, 4n, 2n, 2n, 4n, 6n, 10n, 4n, 155n, 10n, 6n, 6n, 6n, 2n, 2n, 2n, 10n, 4n, 10n, 2n, ]) {
    yield n
  }
}
