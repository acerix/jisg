// Number of binary partitions: number of partitions of 2n into powers of 2.
export default function* A000123(): Generator<number> {
  for (const n of [1, 2, 4, 6, 10, 14, 20, 26, 36, 46, 60, 74, 94, 114, 140, 166, 202, 238, 284, 330, 390, 450, 524, 598, 692, 786, 900, 1014, 1154, 1294, 1460, 1626, 1828, 2030, 2268, 2506, 2790, 3074, 3404, 3734, 4124, 4514, 4964, 5414, 5938, 6462, 7060, 7658, 8350, 9042, 9828, ]) {
    yield n
  }
}
