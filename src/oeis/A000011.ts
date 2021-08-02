// Number of n-bead necklaces (turning over is allowed) where complements are equivalent
export default function* A000011(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 4n, 4n, 8n, 9n, 18n, 23n, 44n, 63n, 122n, 190n, 362n, 612n, 1162n, 2056n, 3914n, 7155n, 13648n, 25482n, 48734n, 92205n, 176906n, 337594n, 649532n, 1246863n, 2405236n, 4636390n, 8964800n, 17334801n, 33588234n, 65108062n, 126390032n, 245492244n, 477353376n, 928772650n, 1808676326n, 3524337980n, ]) {
    yield n
  }
}
