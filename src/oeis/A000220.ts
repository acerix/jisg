// Number of asymmetric trees with n nodes (also called identity trees).
export default function* A000220(): Generator<number> {
  for (const n of [1, 0, 0, 0, 0, 0, 1, 1, 3, 6, 15, 29, 67, 139, 310, 667, 1480, 3244, 7241, 16104, 36192, 81435, 184452, 418870, 955860, 2187664, 5025990, 11580130, 26765230, 62027433, 144133676, 335731381, 783859852, 1834104934, 4300433063, 10102854473, 23778351222, ]) {
    yield n
  }
}
