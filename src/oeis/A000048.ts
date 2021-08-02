// Number of n-bead necklaces with beads of 2 colors and primitive period n, when turning over is not allowed but the two colors can be interchanged.
export default function* A000048(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 2n, 3n, 5n, 9n, 16n, 28n, 51n, 93n, 170n, 315n, 585n, 1091n, 2048n, 3855n, 7280n, 13797n, 26214n, 49929n, 95325n, 182361n, 349520n, 671088n, 1290555n, 2485504n, 4793490n, 9256395n, 17895679n, 34636833n, 67108864n, 130150493n, 252645135n, 490853403n, 954437120n, 1857283155n, ]) {
    yield n
  }
}
