// Number of solutions to x^4 == 0 (mod n).
export default function* A000190(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 1n, 1n, 1n, 4n, 3n, 1n, 1n, 2n, 1n, 1n, 1n, 8n, 1n, 3n, 1n, 2n, 1n, 1n, 1n, 4n, 5n, 1n, 9n, 2n, 1n, 1n, 1n, 8n, 1n, 1n, 1n, 6n, 1n, 1n, 1n, 4n, 1n, 1n, 1n, 2n, 3n, 1n, 1n, 8n, 7n, 5n, 1n, 2n, 1n, 9n, 1n, 4n, 1n, 1n, 1n, 2n, 1n, 1n, 3n, 16n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 12n, 1n, 1n, 5n, 2n, 1n, 1n, 1n, 8n, 27n, 1n, 1n, 2n, 1n, 1n, 1n, 4n, 1n, 3n, ]) {
    yield n
  }
}
