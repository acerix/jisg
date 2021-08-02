// Let A(n) = #{(i,j,k): i^2 + j^2 + k^2 <= n}, V(n) = (4/3)Pi*n^(3/2), P(n) = A(n) - V(n); sequence gives values of n where |P(n)| sets a new record.
export default function* A000092(): Generator<bigint> {
  for (const n of [1n, 2n, 5n, 6n, 14n, 21n, 29n, 30n, 54n, 90n, 134n, 155n, 174n, 230n, 234n, 251n, 270n, 342n, 374n, 461n, 494n, 550n, 666n, 750n, 810n, 990n, 1890n, 2070n, 2486n, 2757n, 2966n, 3150n, 3566n, 3630n, 4554n, 4829n, 5670n, 5750n, 8154n, 8382n, 8774n, 8910n, 10350n, 10710n, 15734n, 15750n, 16302n, 17550n, ]) {
    yield n
  }
}
