// 3rd power of rooted tree enumerator; number of linear forests of 3 rooted trees.
export default function* A000242(): Generator<bigint> {
  for (const n of [1n, 3n, 9n, 25n, 69n, 186n, 503n, 1353n, 3651n, 9865n, 26748n, 72729n, 198447n, 543159n, 1491402n, 4107152n, 11342826n, 31408719n, 87189987n, 242603970n, 676524372n, 1890436117n, 5292722721n, 14845095153n, 41708679697n, 117372283086n, 330795842217n, ]) {
    yield n
  }
}
