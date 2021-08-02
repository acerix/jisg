// Number of rooted trees with n nodes and a single labeled node; pointed rooted trees; vertebrates.
export default function* A000107(): Generator<bigint> {
  for (const n of [0n, 1n, 2n, 5n, 13n, 35n, 95n, 262n, 727n, 2033n, 5714n, 16136n, 45733n, 130046n, 370803n, 1059838n, 3035591n, 8710736n, 25036934n, 72069134n, 207727501n, 599461094n, 1731818878n, 5008149658n, 14496034714n, 41993925955n, 121747732406n, 353221737526n, 1025471857282n, 2978995353959n, 8658997820084n, ]) {
    yield n
  }
}
