// Number of even sequences with period 2n.
export default function* A000208(): Generator<bigint> {
  for (const n of [1n, 1n, 3n, 4n, 12n, 28n, 94n, 298n, 1044n, 3658n, 13164n, 47710n, 174948n, 645436n, 2397342n, 8948416n, 33556500n, 126324496n, 477225962n, 1808414182n, 6871973952n, 26178873448n, 99955697946n, 382438918234n, 1466015854100n, 5629499869780n, ]) {
    yield n
  }
}
