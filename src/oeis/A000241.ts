// Crossing number of complete graph with n nodes.
export default function* A000241(): Generator<bigint> {
  for (const n of [0n, 0n, 0n, 0n, 0n, 1n, 3n, 9n, 18n, 36n, 60n, 100n, 150n, ]) {
    yield n
  }
}
