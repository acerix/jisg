// Number of partially ordered sets ("posets") with n unlabeled elements.
export default function* A000112(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    5n,
    16n,
    63n,
    318n,
    2045n,
    16999n,
    183231n,
    2567284n,
    46749427n,
    1104891746n,
    33823827452n,
    1338193159771n,
    68275077901156n,
    4483130665195087n,
  ]) {
    yield n
  }
}
