// Crossing number of complete graph with n nodes.
export default function* A000241(): Generator<number> {
  for (const n of [0, 0, 0, 0, 0, 1, 3, 9, 18, 36, 60, 100, 150, ]) {
    yield n
  }
}
