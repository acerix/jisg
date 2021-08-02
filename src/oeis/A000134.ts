// Positive zeros of Bessel function of order 0 rounded to nearest integer.
export default function* A000134(): Generator<bigint> {
  for (const n of [2n, 6n, 9n, 12n, 15n, 18n, 21n, 24n, 27n, 31n, 34n, 37n, 40n, 43n, 46n, 49n, 53n, 56n, 59n, 62n, 65n, 68n, 71n, 75n, 78n, 81n, 84n, 87n, 90n, 93n, 97n, 100n, 103n, 106n, 109n, 112n, 115n, 119n, 122n, 125n, 128n, 131n, 134n, 137n, 141n, 144n, 147n, 150n, 153n, 156n, 159n, 163n, 166n, 169n, 172n, 175n, 178n, 181n, 185n, 188n, ]) {
    yield n
  }
}
