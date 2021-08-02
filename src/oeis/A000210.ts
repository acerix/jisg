// A Beatty sequence: floor(n*(e-1)).
export default function* A000210(): Generator<bigint> {
  for (const n of [1n, 3n, 5n, 6n, 8n, 10n, 12n, 13n, 15n, 17n, 18n, 20n, 22n, 24n, 25n, 27n, 29n, 30n, 32n, 34n, 36n, 37n, 39n, 41n, 42n, 44n, 46n, 48n, 49n, 51n, 53n, 54n, 56n, 58n, 60n, 61n, 63n, 65n, 67n, 68n, 70n, 72n, 73n, 75n, 77n, 79n, 80n, 82n, 84n, 85n, 87n, 89n, 91n, 92n, 94n, 96n, 97n, 99n, 101n, 103n, 104n, 106n, 108n, 109n, 111n, 113n, 115n, 116n, ]) {
    yield n
  }
}
