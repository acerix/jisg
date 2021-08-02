// a(8i+j) = 13i + a(j), where 1<=j<=8.
export default function* A000202(): Generator<bigint> {
  for (const n of [1n, 3n, 4n, 6n, 8n, 9n, 11n, 12n, 14n, 16n, 17n, 19n, 21n, 22n, 24n, 25n, 27n, 29n, 30n, 32n, 34n, 35n, 37n, 38n, 40n, 42n, 43n, 45n, 47n, 48n, 50n, 51n, 53n, 55n, 56n, 58n, 60n, 61n, 63n, 64n, 66n, 68n, 69n, 71n, 73n, 74n, 76n, 77n, 79n, 81n, 82n, 84n, 86n, 87n, 89n, 90n, 92n, 94n, 95n, 97n, 99n, 100n, 102n, 103n, 105n, 107n, 108n, 110n, ]) {
    yield n
  }
}
