// Partially labeled rooted trees with n nodes (3 of which are labeled)
export default function* A000444(): Generator<bigint> {
  for (const n of [
    9n,
    64n,
    326n,
    1433n,
    5799n,
    22224n,
    81987n,
    293987n,
    1031298n,
    3555085n,
    12081775n,
    40576240n,
    134919788n,
    444805274n,
    1455645411n,
    4733022100n,
    15302145060n,
    49223709597n,
    157629612076n,
    502736717207n,
    1597541346522n,
    5059625685739n,
    15975936032821n,
    50304490599602n,
  ]) {
    yield n
  }
}
