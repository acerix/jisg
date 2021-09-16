// a(0)=2; for n>=1, a(n) = smallest prime p such that there is a gap of exactly 2n between p and next prime, or -1 if no such prime exists.
export default function* A000230(): Generator<bigint> {
  for (const n of [2n, 3n, 7n, 23n, 89n, 139n, 199n, 113n, 1831n, 523n, 887n, 1129n, 1669n, 2477n, 2971n, 4297n, 5591n, 1327n, 9551n, 30593n, 19333n, 16141n, 15683n, 81463n, 28229n, 31907n, 19609n, 35617n, 82073n, 44293n, 43331n, 34061n, 89689n, 162143n, 134513n, 173359n, 31397n, 404597n, 212701n, 188029n, 542603n, 265621n, 461717n, 155921n, 544279n, 404851n, 927869n, 1100977n, 360653n, 604073n, ]) {
    yield n
  }
}
