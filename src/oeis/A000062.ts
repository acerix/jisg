// A Beatty sequence: a(n) = floor(n/(e-2)).
export default function* A000062(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 5n, 6n, 8n, 9n, 11n, 12n, 13n, 15n, 16n, 18n, 19n, 20n, 22n, 23n, 25n, 26n, 27n, 29n, 30n, 32n, 33n, 34n, 36n, 37n, 38n, 40n, 41n, 43n, 44n, 45n, 47n, 48n, 50n, 51n, 52n, 54n, 55n, 57n, 58n, 59n, 61n, 62n, 64n, 65n, 66n, 68n, 69n, 71n, 72n, 73n, 75n, 76n, 77n, 79n, 80n, 82n, 83n, 84n, 86n, 87n, 89n, 90n, 91n, 93n, 94n, 96n, 97n, 98n, ]) {
    yield n
  }
}
