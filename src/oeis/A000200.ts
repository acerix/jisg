// Number of bicentered hydrocarbons with n atoms.
export default function* A000200(): Generator<bigint> {
  for (const n of [0n, 0n, 1n, 0n, 1n, 1n, 3n, 3n, 9n, 15n, 38n, 73n, 174n, 380n, 915n, 2124n, 5134n, 12281n, 30010n, 73401n, 181835n, 452165n, 1133252n, 2851710n, 7215262n, 18326528n, 46750268n, 119687146n, 307528889n, 792716193n, 2049703887n, 5314775856n, 13817638615n, 36012395538n, ]) {
    yield n
  }
}
