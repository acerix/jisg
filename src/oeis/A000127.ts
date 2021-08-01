// Maximal number of regions obtained by joining n points around a circle by straight lines. Also number of regions in 4-space formed by n-1 hyperplanes.
export default function* A000127(): Generator<number> {
  for (const n of [1, 2, 4, 8, 16, 31, 57, 99, 163, 256, 386, 562, 794, 1093, 1471, 1941, 2517, 3214, 4048, 5036, 6196, 7547, 9109, 10903, 12951, 15276, 17902, 20854, 24158, 27841, 31931, 36457, 41449, 46938, 52956, 59536, 66712, 74519, 82993, 92171, 102091, 112792, 124314, 136698, ]) {
    yield n
  }
}
