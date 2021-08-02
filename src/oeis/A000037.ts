// Numbers that are not squares (or, the nonsquares).
export default function* A000037(): Generator<bigint> {
  for (const n of [2n, 3n, 5n, 6n, 7n, 8n, 10n, 11n, 12n, 13n, 14n, 15n, 17n, 18n, 19n, 20n, 21n, 22n, 23n, 24n, 26n, 27n, 28n, 29n, 30n, 31n, 32n, 33n, 34n, 35n, 37n, 38n, 39n, 40n, 41n, 42n, 43n, 44n, 45n, 46n, 47n, 48n, 50n, 51n, 52n, 53n, 54n, 55n, 56n, 57n, 58n, 59n, 60n, 61n, 62n, 63n, 65n, 66n, 67n, 68n, 69n, 70n, 71n, 72n, 73n, 74n, 75n, 76n, 77n, 78n, 79n, 80n, 82n, 83n, 84n, 85n, 86n, 87n, 88n, 89n, 90n, 91n, 92n, 93n, 94n, 95n, 96n, 97n, 98n, 99n, ]) {
    yield n
  }
}
