// A nonlinear binomial sum.
export default function* A000126(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 8n, 15n, 27n, 47n, 80n, 134n, 222n, 365n, 597n, 973n, 1582n, 2568n, 4164n, 6747n, 10927n, 17691n, 28636n, 46346n, 75002n, 121369n, 196393n, 317785n, 514202n, 832012n, 1346240n, 2178279n, 3524547n, 5702855n, 9227432n, 14930318n, 24157782n, 39088133n, 63245949n, ]) {
    yield n
  }
}
