// Partitions into non-integral powers (see Comments for precise definition).
export default function* A000234(): Generator<bigint> {
  for (const n of [1n, 3n, 8n, 18n, 37n, 72n, 136n, 251n, 445n, 770n, 1312n, 2202n, 3632n, 5908n, 9501n, 15111n, 23781n, 37083n, 57293n, 87813n, 133530n, 201574n, 302265n, 450317n, 666743n, 981488n, 1437003n, 2092976n, 3033253n, 4375104n, 6282026n, 8981046n, 12786327n, 18131492n, 25612628n, ]) {
    yield n
  }
}
