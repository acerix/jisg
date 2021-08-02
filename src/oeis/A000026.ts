// Mosaic numbers or multiplicative projection of n: if n = Product (p_j^k_j) then a(n) = Product (p_j * k_j).
export default function* A000026(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 4n, 5n, 6n, 7n, 6n, 6n, 10n, 11n, 12n, 13n, 14n, 15n, 8n, 17n, 12n, 19n, 20n, 21n, 22n, 23n, 18n, 10n, 26n, 9n, 28n, 29n, 30n, 31n, 10n, 33n, 34n, 35n, 24n, 37n, 38n, 39n, 30n, 41n, 42n, 43n, 44n, 30n, 46n, 47n, 24n, 14n, 20n, 51n, 52n, 53n, 18n, 55n, 42n, 57n, 58n, 59n, 60n, 61n, 62n, 42n, 12n, 65n, 66n, 67n, 68n, 69n, 70n, 71n, 36n, ]) {
    yield n
  }
}
