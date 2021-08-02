// a(n) = sigma(n), the sum of the divisors of n. Also called sigma_1(n).
export default function* A000203(): Generator<bigint> {
  for (const n of [1n, 3n, 4n, 7n, 6n, 12n, 8n, 15n, 13n, 18n, 12n, 28n, 14n, 24n, 24n, 31n, 18n, 39n, 20n, 42n, 32n, 36n, 24n, 60n, 31n, 42n, 40n, 56n, 30n, 72n, 32n, 63n, 48n, 54n, 48n, 91n, 38n, 60n, 56n, 90n, 42n, 96n, 44n, 84n, 78n, 72n, 48n, 124n, 57n, 93n, 72n, 98n, 54n, 120n, 72n, 120n, 80n, 90n, 60n, 168n, 62n, 96n, 104n, 127n, 84n, 144n, 68n, 126n, 96n, 144n, ]) {
    yield n
  }
}
