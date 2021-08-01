// Number of positive integers <= 2^n of form x^2 + 10 y^2.
export default function* A000024(): Generator<number> {
  for (const n of [1, 1, 2, 2, 7, 10, 20, 36, 65, 118, 221, 409, 776, 1463, 2788, 5328, 10222, 19714, 38054, 73685, 142944, 277838, 540889, 1054535, 2058537, 4023278, 7871313, 15414638, 30213190, 59266422, 116343776, 228545682, 449240740, 883570480, 1738769611, 3423469891, 6743730746, ]) {
    yield n
  }
}
