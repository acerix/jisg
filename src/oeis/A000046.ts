// Number of primitive n-bead necklaces (turning over is allowed) where complements are equivalent.
export default function* A000046(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 2n, 3n, 5n, 8n, 14n, 21n, 39n, 62n, 112n, 189n, 352n, 607n, 1144n, 2055n, 3885n, 7154n, 13602n, 25472n, 48670n, 92204n, 176770n, 337590n, 649341n, 1246840n, 2404872n, 4636389n, 8964143n, 17334800n, 33587072n, 65107998n, 126387975n, 245492232n, 477349348n, ]) {
    yield n
  }
}
