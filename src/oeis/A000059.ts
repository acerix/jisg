// Numbers n such that (2n)^4 + 1 is prime.
export default function* A000059(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 8n, 10n, 12n, 14n, 17n, 23n, 24n, 27n, 28n, 37n, 40n, 41n, 44n, 45n, 53n, 59n, 66n, 70n, 71n, 77n, 80n, 82n, 87n, 90n, 97n, 99n, 102n, 105n, 110n, 114n, 119n, 121n, 124n, 127n, 133n, 136n, 138n, 139n, 144n, 148n, 156n, 160n, 164n, 167n, 170n, 176n, 182n, 187n, 207n, 215n, 218n, 221n, 233n, 236n, 238n, 244n, 246n, ]) {
    yield n
  }
}
