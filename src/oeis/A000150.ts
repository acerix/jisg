// Number of dissections of an n-gon, rooted at an exterior edge, asymmetric with respect to that edge.
export default function* A000150(): Generator<bigint> {
  for (const n of [0n, 0n, 1n, 2n, 7n, 20n, 66n, 212n, 715n, 2424n, 8398n, 29372n, 104006n, 371384n, 1337220n, 4847208n, 17678835n, 64821680n, 238819350n, 883629164n, 3282060210n, 12233125112n, 45741281820n, 171529777432n, 644952073662n, 2430973096720n, 9183676536076n, ]) {
    yield n
  }
}
