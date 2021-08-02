// a(n) = n*(n+3)/2.
export default function* A000096(): Generator<bigint> {
  for (const n of [0n, 2n, 5n, 9n, 14n, 20n, 27n, 35n, 44n, 54n, 65n, 77n, 90n, 104n, 119n, 135n, 152n, 170n, 189n, 209n, 230n, 252n, 275n, 299n, 324n, 350n, 377n, 405n, 434n, 464n, 495n, 527n, 560n, 594n, 629n, 665n, 702n, 740n, 779n, 819n, 860n, 902n, 945n, 989n, 1034n, 1080n, 1127n, 1175n, 1224n, 1274n, 1325n, 1377n, 1430n, 1484n, 1539n, 1595n, 1652n, 1710n, 1769n, ]) {
    yield n
  }
}
