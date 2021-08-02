// The tetrahedron numbers
export default function* A000292(): Generator<bigint> {
  for (const n of [0n, 1n, 4n, 10n, 20n, 35n, 56n, 84n, 120n, 165n, 220n, 286n, 364n, 455n, 560n, 680n, 816n, 969n, 1140n, 1330n, 1540n, 1771n, 2024n, 2300n, 2600n, 2925n, 3276n, 3654n, 4060n, 4495n, 4960n, 5456n, 5984n, 6545n, 7140n, 7770n, 8436n, 9139n, 9880n, 10660n, 11480n, 12341n, 13244n, 14190n, 15180n, ]) {
    yield n
  }
}
