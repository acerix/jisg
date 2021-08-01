// Symmetrical dissections of an n-gon.
export default function* A000063(): Generator<number> {
  for (const n of [1, 1, 2, 4, 5, 14, 14, 39, 42, 132, 132, 424, 429, 1428, 1430, 4848, 4862, 16796, 16796, 58739, 58786, 208012, 208012, 742768, 742900, 2674426, 2674440, 9694416, 9694845, 35357670, 35357670, 129643318, 129644790, 477638700, 477638700, 1767258328, 1767263190, 6564120288, ]) {
    yield n
  }
}
