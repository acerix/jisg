// Erroneous version of A003713.
export default function* A000154(): Generator<number> {
  for (const n of [1, 1, 2, 7, 35, 228, 1834, 17382, 195866, 2487832, 35499576, 562356672, 9794156448, 186025364016, 3826961710272, 84775065603888, 2011929826983504, ]) {
    yield n
  }
}
