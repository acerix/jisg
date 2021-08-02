// Number of positive integers <= 2^n of form x^2 + 2 y^2.
export default function* A000067(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 6n, 10n, 18n, 33n, 60n, 111n, 205n, 385n, 725n, 1374n, 2610n, 4993n, 9578n, 18426n, 35568n, 68806n, 133411n, 259145n, 504222n, 982538n, 1917190n, 3745385n, 7324822n, 14339072n, 28095711n, 55095559n, 108124461n, 212342327n, 417283564n, 820520378n, 1614331755n, 3177789615n, 6258525127n, ]) {
    yield n
  }
}
