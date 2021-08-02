// Largest order of automorphism group of a tournament with n nodes.
export default function* A000198(): Generator<bigint> {
  for (const n of [1n, 1n, 3n, 3n, 5n, 9n, 21n, 21n, 81n, 81n, 81n, 243n, 243n, 441n, 1215n, 1701n, 1701n, 6561n, 6561n, 6561n, 45927n, 45927n, 45927n, 137781n, 137781n, 229635n, 1594323n, 1594323n, 1594323n, 4782969n, 4782969n, 7971615n, 14348907n, 33480783n, 33480783n, 129140163n, 129140163n, 129140163n, ]) {
    yield n
  }
}
