// 1-digit numbers arranged in alphabetical order, then the 2-digit numbers arranged in alphabetical order, then the 3-digit numbers, etc.
export default function* A000052(): Generator<bigint> {
  for (const n of [8n, 5n, 4n, 9n, 1n, 7n, 6n, 3n, 2n, 0n, 18n, 80n, 88n, 85n, 84n, 89n, 81n, 87n, 86n, 83n, 82n, 11n, 15n, 50n, 58n, 55n, 54n, 59n, 51n, 57n, 56n, 53n, 52n, 40n, 48n, 45n, 44n, 49n, 41n, 47n, 46n, 43n, 42n, 14n, 19n, 90n, 98n, 95n, 94n, 99n, 91n, 97n, 96n, 93n, 92n, 17n, 70n, 78n, 75n, 74n, 79n, 71n, 77n, 76n, 73n, 72n, ]) {
    yield n
  }
}
