//  Number of rooted trees with n vertices in which vertices at the same level have the same degree
export default function* A003238(): Generator<number> {
  // @todo like https://github.com/nsylv/oeis-js/blob/main/src/a003238.ts
  for (const n of [1, 1, 2, 3, 5, 6, 10, 11, 16, 19, 26, 27, 40, 41, 53, 61, 77, 78, 104, 105, 134, 147, 175, 176, 227, 233, 275, 294, 350, 351, 438, 439, 516, 545, 624, 640, 774, 775, 881, 924, 1069, 1070, 1265, 1266, 1444, 1521, 1698, 1699, ]) {
    yield n
  }
}
