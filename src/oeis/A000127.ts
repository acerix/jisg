// Maximal number of regions obtained by joining n points around a circle by straight lines. Also number of regions in 4-space formed by n-1 hyperplanes.
export default function* A000127(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 8n, 16n, 31n, 57n, 99n, 163n, 256n, 386n, 562n, 794n, 1093n, 1471n, 1941n, 2517n, 3214n, 4048n, 5036n, 6196n, 7547n, 9109n, 10903n, 12951n, 15276n, 17902n, 20854n, 24158n, 27841n, 31931n, 36457n, 41449n, 46938n, 52956n, 59536n, 66712n, 74519n, 82993n, 92171n, 102091n, 112792n, 124314n, 136698n, ]) {
    yield n
  }
}
