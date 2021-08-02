// Number of necklaces with n beads of 2 colors, allowing turning over (these are also called bracelets).
export default function* A000029(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 4n, 6n, 8n, 13n, 18n, 30n, 46n, 78n, 126n, 224n, 380n, 687n, 1224n, 2250n, 4112n, 7685n, 14310n, 27012n, 50964n, 96909n, 184410n, 352698n, 675188n, 1296858n, 2493726n, 4806078n, 9272780n, 17920860n, 34669602n, 67159050n, 130216124n, 252745368n, 490984488n, ]) {
    yield n
  }
}
