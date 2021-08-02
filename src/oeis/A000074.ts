// Number of odd integers <= 2^n of form x^2 + y^2.
export default function* A000074(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 4n, 7n, 13n, 25n, 43n, 83n, 157n, 296n, 564n, 1083n, 2077n, 4006n, 7733n, 14968n, 29044n, 56447n, 109864n, 214197n, 418080n, 816907n, 1598040n, 3129063n, 6132106n, 12027122n, 23606527n, 46366165n, 91127332n, 179207074n, 352615528n, 694182554n, 1367278759n, ]) {
    yield n
  }
}
