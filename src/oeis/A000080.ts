// Number of nonisomorphic minimal triangle graphs.
export default function* A000080(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 4n, 9n, 19n, 48n, 117n, 307n, 821n, 2277n, 6437n, 18634n, 54775n, 163703n, 495529n, 1518706n, 4703848n, 14714754n, 46444979n, 147832051n, 474229588n, 1532565644n, ]) {
    yield n
  }
}
