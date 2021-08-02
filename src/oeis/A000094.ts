// Number of trees of diameter 4.
export default function* A000094(): Generator<bigint> {
  for (const n of [0n, 0n, 0n, 0n, 1n, 2n, 5n, 8n, 14n, 21n, 32n, 45n, 65n, 88n, 121n, 161n, 215n, 280n, 367n, 471n, 607n, 771n, 980n, 1232n, 1551n, 1933n, 2410n, 2983n, 3690n, 4536n, 5574n, 6811n, 8317n, 10110n, 12276n, 14848n, 17941n, 21600n, 25977n, 31146n, 37298n, 44542n, 53132n, 63218n, 75131n, 89089n, ]) {
    yield n
  }
}
