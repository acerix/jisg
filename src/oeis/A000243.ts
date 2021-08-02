// Number of trees with n nodes, 2 of which are labeled.
export default function* A000243(): Generator<bigint> {
  for (const n of [1n, 3n, 9n, 26n, 75n, 214n, 612n, 1747n, 4995n, 14294n, 40967n, 117560n, 337830n, 972027n, 2800210n, 8075889n, 23315775n, 67380458n, 194901273n, 564239262n, 1634763697n, 4739866803n, 13752309730n, 39926751310n, 115988095896n, 337138003197n, ]) {
    yield n
  }
}
