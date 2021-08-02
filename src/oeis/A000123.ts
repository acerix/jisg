// Number of binary partitions: number of partitions of 2n into powers of 2.
export default function* A000123(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 6n, 10n, 14n, 20n, 26n, 36n, 46n, 60n, 74n, 94n, 114n, 140n, 166n, 202n, 238n, 284n, 330n, 390n, 450n, 524n, 598n, 692n, 786n, 900n, 1014n, 1154n, 1294n, 1460n, 1626n, 1828n, 2030n, 2268n, 2506n, 2790n, 3074n, 3404n, 3734n, 4124n, 4514n, 4964n, 5414n, 5938n, 6462n, 7060n, 7658n, 8350n, 9042n, 9828n, ]) {
    yield n
  }
}
