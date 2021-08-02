// Number of ways of making change for n cents using coins of 1n, 2n, 5n, 10 cents
export default function* A000008(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 11n, 12n, 15n, 16n, 19n, 22n, 25n, 28n, 31n, 34n, 40n, 43n, 49n, 52n, 58n, 64n, 70n, 76n, 82n, 88n, 98n, 104n, 114n, 120n, 130n, 140n, 150n, 160n, 170n, 180n, 195n, 205n, 220n, 230n, 245n, 260n, 275n, 290n, 305n, 320n, 341n, 356n, 377n, 392n, 413n, 434n, 455n, 476n, 497n, 518n, 546n, ]) {
    yield n
  }
}
