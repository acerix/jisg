// Number of cusps of principal congruence subgroup GAMMA^{hat}(n).
export default function* A000114(): Generator<bigint> {
  for (const n of [3n, 4n, 6n, 12n, 12n, 24n, 24n, 36n, 36n, 60n, 48n, 84n, 72n, 96n, 96n, 144n, 108n, 180n, 144n, 192n, 180n, 264n, 192n, 300n, 252n, 324n, 288n, 420n, 288n, 480n, 384n, 480n, 432n, 576n, 432n, 684n, 540n, 672n, 576n, 840n, 576n, 924n, 720n, 864n, 792n, 1104n, 768n, 1176n, 900n, 1152n, 1008n, 1404n, 972n, 1440n, ]) {
    yield n
  }
}
