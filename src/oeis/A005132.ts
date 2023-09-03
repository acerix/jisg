// Recamán's sequence (or Recaman's sequence): a(0) = 0; for n > 0, a(n) = a(n-1) - n if nonnegative and not already in the sequence, otherwise a(n) = a(n-1) + n. 
export default function* A005132(): Generator<bigint> {
  for (const n of [0n, 1n, 3n, 6n, 2n, 7n, 13n, 20n, 12n, 21n, 11n, 22n, 10n, 23n, 9n, 24n, 8n, 25n, 43n, 62n, 42n, 63n, 41n, 18n, 42n, 17n, 43n, 16n, 44n, 15n, 45n, 14n, 46n, 79n, 113n, 78n, 114n, 77n, 39n, 78n, 38n, 79n, 37n, 80n, 36n, 81n, 35n, 82n, 34n, 83n, 33n, 84n, 32n, 85n, 31n, 86n, 30n, 87n, 29n, 88n, 28n, 89n, 27n, 90n, 26n, 91n, 157n, 224n, 156n, 225n, 155n]) {
    yield n
  }
}
