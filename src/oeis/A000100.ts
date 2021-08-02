// a(n) is the number of compositions of n in which the maximal part is 3.
export default function* A000100(): Generator<bigint> {
  for (const n of [0n, 0n, 0n, 1n, 2n, 5n, 11n, 23n, 47n, 94n, 185n, 360n, 694n, 1328n, 2526n, 4781n, 9012n, 16929n, 31709n, 59247n, 110469n, 205606n, 382087n, 709108n, 1314512n, 2434364n, 4504352n, 8328253n, 15388362n, 28417385n, 52451811n, 96771787n, 178473023n, 329042890n, 606466009n, 1117506500n, ]) {
    yield n
  }
}
