// Number of simplicial polyhedra with n nodes; simple planar graphs with 3n-6 edges; maximal simple planar graphs; 3-connected planar triangulations; 3-connected triangulations of the sphere; 3-connected cubic planar graphs.
export default function* A000109(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 5n, 14n, 50n, 233n, 1249n, 7595n, 49566n, 339722n, 2406841n, 17490241n, 129664753n, 977526957n, 7475907149n, 57896349553n, 453382272049n, 3585853662949n, 28615703421545n, ]) {
    yield n
  }
}
