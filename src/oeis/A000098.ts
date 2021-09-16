// Number of partitions of n if there are two kinds of 1, two kinds of 2 and two kinds of 3.
export default function* A000098(): Generator<bigint> {
  for (const n of [1n, 2n, 5n, 10n, 19n, 33n, 57n, 92n, 147n, 227n, 345n, 512n, 752n, 1083n, 1545n, 2174n, 3031n, 4179n, 5719n, 7752n, 10438n, 13946n, 18519n, 24428n, 32051n, 41805n, 54265n, 70079n, 90102n, 115318n, 147005n, 186626n, 236064n, 297492n, 373645n, 467707n, ]) {
    yield n
  }
}
