// a(n) is the number of compositions of n in which the maximal part is 3.
export default function* A000100(): Generator<number> {
  for (const n of [0, 0, 0, 1, 2, 5, 11, 23, 47, 94, 185, 360, 694, 1328, 2526, 4781, 9012, 16929, 31709, 59247, 110469, 205606, 382087, 709108, 1314512, 2434364, 4504352, 8328253, 15388362, 28417385, 52451811, 96771787, 178473023, 329042890, 606466009, 1117506500, ]) {
    yield n
  }
}
