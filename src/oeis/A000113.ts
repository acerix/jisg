// Number of transformation groups of order n.
export default function* A000113(): Generator<bigint> {
  for (const n of [1n, 3n, 4n, 3n, 6n, 12n, 8n, 6n, 4n, 18n, 12n, 12n, 14n, 24n, 24n, 6n, 18n, 12n, 20n, 18n, 32n, 36n, 24n, 24n, 30n, 42n, 12n, 24n, 30n, 72n, 32n, 12n, 48n, 54n, 48n, 12n, 38n, 60n, 56n, 36n, 42n, 96n, 44n, 36n, 24n, 72n, 48n, 24n, 56n, 90n, 72n, 42n, 54n, 36n, 72n, 48n, 80n, 90n, 60n, 72n, 62n, 96n, 32n, 12n, 84n, 144n, 68n, ]) {
    yield n
  }
}
