// Let n = p_1^e_1 p_2^e_2 p_3^e_3 ... be the prime factorization of n. Sequence gives n such that the sum of the numbers of 1's in the binary expansions of e_1n, e_2n, e_3n, ... is odd.
export default function* A000028(): Generator<bigint> {
  for (const n of [2n, 3n, 4n, 5n, 7n, 9n, 11n, 13n, 16n, 17n, 19n, 23n, 24n, 25n, 29n, 30n, 31n, 37n, 40n, 41n, 42n, 43n, 47n, 49n, 53n, 54n, 56n, 59n, 60n, 61n, 66n, 67n, 70n, 71n, 72n, 73n, 78n, 79n, 81n, 83n, 84n, 88n, 89n, 90n, 96n, 97n, 101n, 102n, 103n, 104n, 105n, 107n, 108n, 109n, 110n, 113n, 114n, 121n, 126n, 127n, 128n, 130n, 131n, 132n, 135n, 136n, 137n, ]) {
    yield n
  }
}
