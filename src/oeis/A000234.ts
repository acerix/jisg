// Partitions into non-integral powers (see Comments for precise definition).
export default function* A000234(): Generator<number> {
  for (const n of [1, 3, 8, 18, 37, 72, 136, 251, 445, 770, 1312, 2202, 3632, 5908, 9501, 15111, 23781, 37083, 57293, 87813, 133530, 201574, 302265, 450317, 666743, 981488, 1437003, 2092976, 3033253, 4375104, 6282026, 8981046, 12786327, 18131492, 25612628, ]) {
    yield n
  }
}
