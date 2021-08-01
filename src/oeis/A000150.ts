// Number of dissections of an n-gon, rooted at an exterior edge, asymmetric with respect to that edge.
export default function* A000150(): Generator<number> {
  for (const n of [0, 0, 1, 2, 7, 20, 66, 212, 715, 2424, 8398, 29372, 104006, 371384, 1337220, 4847208, 17678835, 64821680, 238819350, 883629164, 3282060210, 12233125112, 45741281820, 171529777432, 644952073662, 2430973096720, 9183676536076, ]) {
    yield n
  }
}
