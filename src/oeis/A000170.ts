// Number of ways of placing n nonattacking queens on an n X n board.
export default function* A000170(): Generator<bigint> {
  for (const n of [1n, 1n, 0n, 0n, 2n, 10n, 4n, 40n, 92n, 352n, 724n, 2680n, 14200n, 73712n, 365596n, 2279184n, 14772512n, 95815104n, 666090624n, 4968057848n, 39029188884n, 314666222712n, 2691008701644n, 24233937684440n, 227514171973736n, 2207893435808352n, 22317699616364044n, 234907967154122528n, ]) {
    yield n
  }
}
