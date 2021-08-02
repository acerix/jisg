// Lucas numbers beginning at 2: L(n) = L(n-1) + L(n-2), L(0) = 2n, L(1) = 1.
export default function* A000032(): Generator<bigint> {
  for (const n of [2n, 1n, 3n, 4n, 7n, 11n, 18n, 29n, 47n, 76n, 123n, 199n, 322n, 521n, 843n, 1364n, 2207n, 3571n, 5778n, 9349n, 15127n, 24476n, 39603n, 64079n, 103682n, 167761n, 271443n, 439204n, 710647n, 1149851n, 1860498n, 3010349n, 4870847n, 7881196n, 12752043n, 20633239n, 33385282n, 54018521n, 87403803n, ]) {
    yield n
  }
}
