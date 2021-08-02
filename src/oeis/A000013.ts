// Number of n-bead binary necklaces with beads of 2 colors where the colors may be swapped but turning over is not allowed
export default function* A000013(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 4n, 4n, 8n, 10n, 20n, 30n, 56n, 94n, 180n, 316n, 596n, 1096n, 2068n, 3856n, 7316n, 13798n, 26272n, 49940n, 95420n, 182362n, 349716n, 671092n, 1290872n, 2485534n, 4794088n, 9256396n, 17896832n, 34636834n, 67110932n, 130150588n, 252648992n, 490853416n, ]) {
    yield n
  }
}
