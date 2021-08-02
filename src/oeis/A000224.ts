// Number of squares mod n.
export default function* A000224(): Generator<bigint> {
  for (const n of [1n, 2n, 2n, 2n, 3n, 4n, 4n, 3n, 4n, 6n, 6n, 4n, 7n, 8n, 6n, 4n, 9n, 8n, 10n, 6n, 8n, 12n, 12n, 6n, 11n, 14n, 11n, 8n, 15n, 12n, 16n, 7n, 12n, 18n, 12n, 8n, 19n, 20n, 14n, 9n, 21n, 16n, 22n, 12n, 12n, 24n, 24n, 8n, 22n, 22n, 18n, 14n, 27n, 22n, 18n, 12n, 20n, 30n, 30n, 12n, 31n, 32n, 16n, 12n, 21n, 24n, 34n, 18n, 24n, 24n, 36n, 12n, ]) {
    yield n
  }
}
