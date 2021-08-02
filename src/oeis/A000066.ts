// Smallest number of vertices in trivalent graph with girth (shortest cycle) = n.
export default function* A000066(): Generator<bigint> {
  for (const n of [4n, 6n, 10n, 14n, 24n, 30n, 58n, 70n, 112n, 126n, ]) {
    yield n
  }
}
