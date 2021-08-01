// Number of partitions of n if there are two kinds of 1, two kinds of 2 and two kinds of 3.
export default function* A000098(): Generator<number> {
  for (const n of [1, 2, 5, 10, 19, 33, 57, 92, 147, 227, 345, 512, 752, 1083, 1545, 2174, 3031, 4179, 5719, 7752, 10438, 13946, 18519, 24428, 32051, 41805, 54265, 70079, 90102, 115318, 147005, 186626, 236064, 297492, 373645, 467707, ]) {
    yield n
  }
}
