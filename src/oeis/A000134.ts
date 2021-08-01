// Positive zeros of Bessel function of order 0 rounded to nearest integer.
export default function* A000134(): Generator<number> {
  for (const n of [2, 6, 9, 12, 15, 18, 21, 24, 27, 31, 34, 37, 40, 43, 46, 49, 53, 56, 59, 62, 65, 68, 71, 75, 78, 81, 84, 87, 90, 93, 97, 100, 103, 106, 109, 112, 115, 119, 122, 125, 128, 131, 134, 137, 141, 144, 147, 150, 153, 156, 159, 163, 166, 169, 172, 175, 178, 181, 185, 188, ]) {
    yield n
  }
}
