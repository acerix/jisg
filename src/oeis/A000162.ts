// Number of 3-dimensional polyominoes (or polycubes) with n cells.
export default function* A000162(): Generator<number> {
  for (const n of [1, 1, 2, 8, 29, 166, 1023, 6922, 48311, 346543, 2522522, 18598427, 138462649, 1039496297, 7859514470, 59795121480, ]) {
    yield n
  }
}
