// Coefficient of q^(2n) in the series expansion of Ramanujan's mock theta function f(q).
export default function* A000039(): Generator<number> {
  for (const n of [1, -2, -3, -5, -6, -10, -11, -17, -21, -27, -33, -46, -53, -68, -82, -104, -123, -154, -179, -221, -262, -314, -369, -446, -515, -614, -715, -845, -977, -1148, -1321, -1544, -1778, -2060, -2361, -2736, -3121, -3592, -4097, -4696, -5340, -6105, -6916, -7882, -8919, -10123, -11429, -12952, -14580, ]) {
    yield n
  }
}
