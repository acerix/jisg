// Coefficient of q^(2n-1) in the series expansion of Ramanujan's mock theta function f(q).
export default function* A000199(): Generator<number> {
  for (const n of [1, 3, 3, 7, 6, 12, 13, 20, 21, 34, 36, 51, 58, 78, 89, 118, 131, 171, 197, 245, 279, 349, 398, 486, 557, 671, 767, 920, 1046, 1244, 1421, 1667, 1898, 2225, 2525, 2937, 3333, 3856, 4367, 5034, 5683, 6521, 7365, 8409, 9473, 10795, 12133, 13775, 15466, ]) {
    yield n
  }
}
