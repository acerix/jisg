// Coefficient of q^(2n) in the series expansion of Ramanujan's mock theta function f(q).
export default function* A000039(): Generator<bigint> {
  for (const n of [1n, -2n, -3n, -5n, -6n, -10n, -11n, -17n, -21n, -27n, -33n, -46n, -53n, -68n, -82n, -104n, -123n, -154n, -179n, -221n, -262n, -314n, -369n, -446n, -515n, -614n, -715n, -845n, -977n, -1148n, -1321n, -1544n, -1778n, -2060n, -2361n, -2736n, -3121n, -3592n, -4097n, -4696n, -5340n, -6105n, -6916n, -7882n, -8919n, -10123n, -11429n, -12952n, -14580n, ]) {
    yield n
  }
}
