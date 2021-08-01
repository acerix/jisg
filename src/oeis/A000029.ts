// Number of necklaces with n beads of 2 colors, allowing turning over (these are also called bracelets).
export default function* A000029(): Generator<number> {
  for (const n of [1, 2, 3, 4, 6, 8, 13, 18, 30, 46, 78, 126, 224, 380, 687, 1224, 2250, 4112, 7685, 14310, 27012, 50964, 96909, 184410, 352698, 675188, 1296858, 2493726, 4806078, 9272780, 17920860, 34669602, 67159050, 130216124, 252745368, 490984488, ]) {
    yield n
  }
}
