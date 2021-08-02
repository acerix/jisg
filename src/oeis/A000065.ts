// -1 + number of partitions of n.
export default function* A000065(): Generator<bigint> {
  for (const n of [0n, 0n, 1n, 2n, 4n, 6n, 10n, 14n, 21n, 29n, 41n, 55n, 76n, 100n, 134n, 175n, 230n, 296n, 384n, 489n, 626n, 791n, 1001n, 1254n, 1574n, 1957n, 2435n, 3009n, 3717n, 4564n, 5603n, 6841n, 8348n, 10142n, 12309n, 14882n, 17976n, 21636n, 26014n, 31184n, 37337n, 44582n, 53173n, 63260n, 75174n, 89133n, 105557n, 124753n, ]) {
    yield n
  }
}
