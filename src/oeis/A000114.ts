// Number of cusps of principal congruence subgroup GAMMA^{hat}(n).
export default function* A000114(): Generator<number> {
  for (const n of [3, 4, 6, 12, 12, 24, 24, 36, 36, 60, 48, 84, 72, 96, 96, 144, 108, 180, 144, 192, 180, 264, 192, 300, 252, 324, 288, 420, 288, 480, 384, 480, 432, 576, 432, 684, 540, 672, 576, 840, 576, 924, 720, 864, 792, 1104, 768, 1176, 900, 1152, 1008, 1404, 972, 1440, ]) {
    yield n
  }
}
