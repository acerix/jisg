// a(n) = a(n-1) + a(n-2) - 2n, a(0) = 4n, a(1) = 3.
export default function* A000211(): Generator<bigint> {
  for (const n of [4n, 3n, 5n, 6n, 9n, 13n, 20n, 31n, 49n, 78n, 125n, 201n, 324n, 523n, 845n, 1366n, 2209n, 3573n, 5780n, 9351n, 15129n, 24478n, 39605n, 64081n, 103684n, 167763n, 271445n, 439206n, 710649n, 1149853n, 1860500n, 3010351n, 4870849n, 7881198n, ]) {
    yield n
  }
}
