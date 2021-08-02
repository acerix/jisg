// Let A(n) = #{(i,j): i^2 + j^2 <= n}, V(n) = Pi*n, P(n) = A(n) - V(n); A000099 gives values of n where |P(n)| sets a new record; sequence gives closest integer to P(A000099(n)).
export default function* A000036(): Generator<bigint> {
  for (const n of [2n, 3n, 5n, 6n, 6n, -6n, 7n, 8n, 10n, 13n, 13n, 13n, 14n, -17n, 17n, 17n, 18n, -19n, 20n, -22n, 23n, 27n, -29n, -29n, 29n, -31n, -32n, -35n, 36n, -37n, -40n, -43n, -46n, -48n, -50n, -53n, -55n, -57n, -60n, -60n, -61n, -63n, -66n, -66n, -68n, -71n, -74n, -77n, -79n, -82n, -85n, -88n, -89n, -92n, -95n, -96n, -97n, -97n, -100n, ]) {
    yield n
  }
}
