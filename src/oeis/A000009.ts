// Number of partitions of n into odd parts
export default function* A000009(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 2n, 3n, 4n, 5n, 6n, 8n, 10n, 12n, 15n, 18n, 22n, 27n, 32n, 38n, 46n, 54n, 64n, 76n, 89n, 104n, 122n, 142n, 165n, 192n, 222n, 256n, 296n, 340n, 390n, 448n, 512n, 585n, 668n, 760n, 864n, 982n, 1113n, 1260n, 1426n, 1610n, 1816n, 2048n, 2304n, 2590n, 2910n, 3264n, 3658n, 4097n, 4582n, 5120n, 5718n, 6378n, ]) {
    yield n
  }
}
