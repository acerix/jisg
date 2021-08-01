// a(0)=2; for n>=1, a(n) = smallest prime p such that there is a gap of exactly 2n between p and next prime, or -1 if no such prime exists.
export default function* A000230(): Generator<number> {
  for (const n of [2, 3, 7, 23, 89, 139, 199, 113, 1831, 523, 887, 1129, 1669, 2477, 2971, 4297, 5591, 1327, 9551, 30593, 19333, 16141, 15683, 81463, 28229, 31907, 19609, 35617, 82073, 44293, 43331, 34061, 89689, 162143, 134513, 173359, 31397, 404597, 212701, 188029, 542603, 265621, 461717, 155921, 544279, 404851, 927869, 1100977, 360653, 604073, ]) {
    yield n
  }
}
