// Number of ways of making change for n cents using coins of 1, 2, 5, 10 cents
export default function* A000008(): Generator<number> {
  for (const n of [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 11, 12, 15, 16, 19, 22, 25, 28, 31, 34, 40, 43, 49, 52, 58, 64, 70, 76, 82, 88, 98, 104, 114, 120, 130, 140, 150, 160, 170, 180, 195, 205, 220, 230, 245, 260, 275, 290, 305, 320, 341, 356, 377, 392, 413, 434, 455, 476, 497, 518, 546, ]) {
    yield n
  }
}
