// Cake numbers: maximal number of pieces resulting from n planar cuts through a cube (or cake): C(n+1n,3)+n+1.
export default function* A000125(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 8n, 15n, 26n, 42n, 64n, 93n, 130n, 176n, 232n, 299n, 378n, 470n, 576n, 697n, 834n, 988n, 1160n, 1351n, 1562n, 1794n, 2048n, 2325n, 2626n, 2952n, 3304n, 3683n, 4090n, 4526n, 4992n, 5489n, 6018n, 6580n, 7176n, 7807n, 8474n, 9178n, 9920n, 10701n, 11522n, 12384n, 13288n, 14235n, 15226n, ]) {
    yield n
  }
}
