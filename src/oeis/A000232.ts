// Construct a triangle as in A036262. Sequence is one less than the position of the first number larger than 2 in the n-th row (n-th difference).
export default function* A000232(): Generator<bigint> {
  for (const n of [3n, 8n, 14n, 14n, 25n, 24n, 23n, 22n, 25n, 59n, 98n, 97n, 98n, 97n, 174n, 176n, 176n, 176n, 176n, 291n, 290n, 289n, 740n, 874n, 873n, 872n, 873n, 872n, 871n, 870n, 869n, 868n, 867n, 866n, 2180n, 2179n, 2178n, 2177n, 2771n, 2770n, 2769n, 2768n, 2767n, 2766n, 2765n, 2764n, 2763n, 2763n, 2763n, 2763n, 3366n, 4208n, 4207n, ]) {
    yield n
  }
}
