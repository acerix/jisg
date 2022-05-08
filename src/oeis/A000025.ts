// Coefficients of the 3rd order mock theta function f(q).
export default function* A000025(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    -2n,
    3n,
    -3n,
    3n,
    -5n,
    7n,
    -6n,
    6n,
    -10n,
    12n,
    -11n,
    13n,
    -17n,
    20n,
    -21n,
    21n,
    -27n,
    34n,
    -33n,
    36n,
    -46n,
    51n,
    -53n,
    58n,
    -68n,
    78n,
    -82n,
    89n,
    -104n,
    118n,
    -123n,
    131n,
    -154n,
    171n,
    -179n,
    197n,
    -221n,
    245n,
    -262n,
    279n,
    -314n,
    349n,
    -369n,
    398n,
    -446n,
    486n,
    -515n,
    557n,
    -614n,
    671n,
    -715n,
    767n,
    -845n,
    920n,
    -977n,
    1046n,
    -1148n,
    1244n,
  ]) {
    yield n
  }
}
