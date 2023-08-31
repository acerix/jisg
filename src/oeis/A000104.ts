// Number of n-celled polyominoes without holes.
export default function* A000104(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    1n,
    2n,
    5n,
    12n,
    35n,
    107n,
    363n,
    1248n,
    4460n,
    16094n,
    58937n,
    217117n,
    805475n,
    3001127n,
    11230003n,
    42161529n,
    158781106n,
    599563893n,
    2269506062n,
    8609442688n,
    32725637373n,
    124621833354n,
    475368834568n,
    1816103345752n,
    6948228104703n,
    26618671505989n,
    102102788362303n
  ]) {
    yield n
  }
}
