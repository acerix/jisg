// Largest order of automorphism group of a tournament with n nodes.
export default function* A000198(): Generator<number> {
  for (const n of [1, 1, 3, 3, 5, 9, 21, 21, 81, 81, 81, 243, 243, 441, 1215, 1701, 1701, 6561, 6561, 6561, 45927, 45927, 45927, 137781, 137781, 229635, 1594323, 1594323, 1594323, 4782969, 4782969, 7971615, 14348907, 33480783, 33480783, 129140163, 129140163, 129140163, ]) {
    yield n
  }
}
