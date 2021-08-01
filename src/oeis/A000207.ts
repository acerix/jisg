// Number of inequivalent ways of dissecting a regular (n+2)-gon into n triangles by n-1 non-intersecting diagonals under rotations and reflections; also the number of planar 2-trees.
export default function* A000207(): Generator<number> {
  for (const n of [1, 1, 1, 3, 4, 12, 27, 82, 228, 733, 2282, 7528, 24834, 83898, 285357, 983244, 3412420, 11944614, 42080170, 149197152, 531883768, 1905930975, 6861221666, 24806004996, 90036148954, 327989004892, 1198854697588, 4395801203290, 16165198379984, 59609171366326, 220373278174641, ]) {
    yield n
  }
}
