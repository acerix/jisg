// Partial sums of (unordered) ways of making change for n cents using coins of 1n, 2n, 5n, 10 cents.
export default function* A000064(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 6n, 9n, 13n, 18n, 24n, 31n, 39n, 50n, 62n, 77n, 93n, 112n, 134n, 159n, 187n, 218n, 252n, 292n, 335n, 384n, 436n, 494n, 558n, 628n, 704n, 786n, 874n, 972n, 1076n, 1190n, 1310n, 1440n, 1580n, 1730n, 1890n, 2060n, 2240n, 2435n, 2640n, 2860n, 3090n, 3335n, 3595n, 3870n, 4160n, 4465n, 4785n, 5126n, ]) {
    yield n
  }
}
