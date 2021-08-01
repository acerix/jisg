// Number of primitive n-bead necklaces (turning over is allowed) where complements are equivalent.
export default function* A000046(): Generator<number> {
  for (const n of [1, 1, 1, 1, 2, 3, 5, 8, 14, 21, 39, 62, 112, 189, 352, 607, 1144, 2055, 3885, 7154, 13602, 25472, 48670, 92204, 176770, 337590, 649341, 1246840, 2404872, 4636389, 8964143, 17334800, 33587072, 65107998, 126387975, 245492232, 477349348, ]) {
    yield n
  }
}
