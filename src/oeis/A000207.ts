// Number of inequivalent ways of dissecting a regular (n+2)-gon into n triangles by n-1 non-intersecting diagonals under rotations and reflections; also the number of planar 2-trees.
export default function* A000207(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 3n, 4n, 12n, 27n, 82n, 228n, 733n, 2282n, 7528n, 24834n, 83898n, 285357n, 983244n, 3412420n, 11944614n, 42080170n, 149197152n, 531883768n, 1905930975n, 6861221666n, 24806004996n, 90036148954n, 327989004892n, 1198854697588n, 4395801203290n, 16165198379984n, 59609171366326n, 220373278174641n, ]) {
    yield n
  }
}
