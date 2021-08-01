// Number of n-bead necklaces (turning over is allowed) where complements are equivalent
export default function* A000011(): Generator<number> {
  for (const n of [1, 1, 2, 2, 4, 4, 8, 9, 18, 23, 44, 63, 122, 190, 362, 612, 1162, 2056, 3914, 7155, 13648, 25482, 48734, 92205, 176906, 337594, 649532, 1246863, 2405236, 4636390, 8964800, 17334801, 33588234, 65108062, 126390032, 245492244, 477353376, 928772650, 1808676326, 3524337980, ]) {
    yield n
  }
}
