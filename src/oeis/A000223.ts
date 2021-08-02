// Let A(n) = #{(i,j,k): i^2 + j^2 + k^2 <= n}, V(n) = (4/3)Pi*n^(3/2), P(n) = A(n) - V(n); A000092 gives values of n where |P(n)| sets a new record; sequence gives (nearest integer to, I believe) P(A000092(n)).
export default function* A000223(): Generator<bigint> {
  for (const n of [3n, 7n, 10n, 19n, 32n, 34n, 37n, 51n, 81n, 119n, 122n, 134n, 157n, 160n, 161n, 174n, 221n, 252n, 254n, 294n, 305n, 309n, 364n, 371n, 405n, 580n, 682n, 734n, 756n, 763n, 776n, 959n, 1028n, 1105n, 1120n, 1170n, 1205n, 1550n, 1570n, 1576n, 1851n, 1930n, 2028n, 2404n, 2411n, 2565n, 2675n, 2895n, 2905n, 2940n, 3133n, 3211n, 3240n, 3428n, ]) {
    yield n
  }
}
