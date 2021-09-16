// Number of rooted trees with n vertices in which vertices at the same level have the same degree
export default function* A003238(): Generator<bigint> {
  // @todo like https://github.com/nsylv/oeis-js/blob/main/src/a003238.ts
  for (const n of [1n, 1n, 2n, 3n, 5n, 6n, 10n, 11n, 16n, 19n, 26n, 27n, 40n, 41n, 53n, 61n, 77n, 78n, 104n, 105n, 134n, 147n, 175n, 176n, 227n, 233n, 275n, 294n, 350n, 351n, 438n, 439n, 516n, 545n, 624n, 640n, 774n, 775n, 881n, 924n, 1069n, 1070n, 1265n, 1266n, 1444n, 1521n, 1698n, 1699n, ]) {
    yield n
  }
}
