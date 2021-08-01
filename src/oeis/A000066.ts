// Smallest number of vertices in trivalent graph with girth (shortest cycle) = n.
export default function* A000066(): Generator<number> {
  for (const n of [4, 6, 10, 14, 24, 30, 58, 70, 112, 126, ]) {
    yield n
  }
}
