// Number of n-node triangulations of sphere in which every node has degree >= 4.
export default function* A000103(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    1n,
    1n,
    2n,
    5n,
    12n,
    34n,
    130n,
    525n,
    2472n,
    12400n,
    65619n,
    357504n,
    1992985n,
    11284042n,
    64719885n,
    375126827n,
    2194439398n,
    12941995397n,
    76890024027n,
    459873914230n,
    2767364341936n,
    16747182732792n,
  ]) {
    yield n
  }
}
