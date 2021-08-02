// Symmetrical dissections of an n-gon.
export default function* A000063(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 4n, 5n, 14n, 14n, 39n, 42n, 132n, 132n, 424n, 429n, 1428n, 1430n, 4848n, 4862n, 16796n, 16796n, 58739n, 58786n, 208012n, 208012n, 742768n, 742900n, 2674426n, 2674440n, 9694416n, 9694845n, 35357670n, 35357670n, 129643318n, 129644790n, 477638700n, 477638700n, 1767258328n, 1767263190n, 6564120288n, ]) {
    yield n
  }
}
