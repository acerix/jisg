// 2nd power of rooted tree enumerator; number of linear forests of 2 rooted trees.
export default function* A000106(): Generator<bigint> {
  for (const n of [1n, 2n, 5n, 12n, 30n, 74n, 188n, 478n, 1235n, 3214n, 8450n, 22370n, 59676n, 160140n, 432237n, 1172436n, 3194870n, 8741442n, 24007045n, 66154654n, 182864692n, 506909562n, 1408854940n, 3925075510n, 10959698606n, 30665337738n, 85967279447n, 241433975446n, 679192039401n, 1913681367936n, 5399924120339n, ]) {
    yield n
  }
}
