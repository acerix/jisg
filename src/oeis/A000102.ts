// a(n) = number of compositions of n in which the maximum part size is 4.
export default function* A000102(): Generator<number> {
  for (const n of [0, 0, 0, 0, 1, 2, 5, 12, 27, 59, 127, 269, 563, 1167, 2400, 4903, 9960, 20135, 40534, 81300, 162538, 324020, 644282, 1278152, 2530407, 5000178, 9863763, 19427976, 38211861, 75059535, 147263905, 288609341, 565047233, 1105229439, 2159947998, ]) {
    yield n
  }
}
