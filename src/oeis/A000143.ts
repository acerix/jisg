// Number of ways of writing n as a sum of 8 squares.
export default function* A000143(): Generator<number> {
  for (const n of [1, 16, 112, 448, 1136, 2016, 3136, 5504, 9328, 12112, 14112, 21312, 31808, 35168, 38528, 56448, 74864, 78624, 84784, 109760, 143136, 154112, 149184, 194688, 261184, 252016, 246176, 327040, 390784, 390240, 395136, 476672, 599152, 596736, 550368, 693504, 859952, ]) {
    yield n
  }
}
