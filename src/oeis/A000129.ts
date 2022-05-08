// Pell numbers: a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2).
export default function* A000129(): Generator<bigint> {
  for (const n of [
    0n,
    1n,
    2n,
    5n,
    12n,
    29n,
    70n,
    169n,
    408n,
    985n,
    2378n,
    5741n,
    13860n,
    33461n,
    80782n,
    195025n,
    470832n,
    1136689n,
    2744210n,
    6625109n,
    15994428n,
    38613965n,
    93222358n,
    225058681n,
    543339720n,
    1311738121n,
    3166815962n,
    7645370045n,
    18457556052n,
    44560482149n,
    107578520350n,
    259717522849n,
  ]) {
    yield n
  }
}
