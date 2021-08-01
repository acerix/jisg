// Number of n-bead necklaces with beads of 2 colors and primitive period n, when turning over is not allowed but the two colors can be interchanged.
export default function* A000048(): Generator<number> {
  for (const n of [1, 1, 1, 1, 2, 3, 5, 9, 16, 28, 51, 93, 170, 315, 585, 1091, 2048, 3855, 7280, 13797, 26214, 49929, 95325, 182361, 349520, 671088, 1290555, 2485504, 4793490, 9256395, 17895679, 34636833, 67108864, 130150493, 252645135, 490853403, 954437120, 1857283155, ]) {
    yield n
  }
}
