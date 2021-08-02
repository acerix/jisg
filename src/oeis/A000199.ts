// Coefficient of q^(2n-1) in the series expansion of Ramanujan's mock theta function f(q).
export default function* A000199(): Generator<bigint> {
  for (const n of [1n, 3n, 3n, 7n, 6n, 12n, 13n, 20n, 21n, 34n, 36n, 51n, 58n, 78n, 89n, 118n, 131n, 171n, 197n, 245n, 279n, 349n, 398n, 486n, 557n, 671n, 767n, 920n, 1046n, 1244n, 1421n, 1667n, 1898n, 2225n, 2525n, 2937n, 3333n, 3856n, 4367n, 5034n, 5683n, 6521n, 7365n, 8409n, 9473n, 10795n, 12133n, 13775n, 15466n, ]) {
    yield n
  }
}
