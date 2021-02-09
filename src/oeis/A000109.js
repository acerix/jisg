// Number of simplicial polyhedra with n nodes; simple planar graphs with 3n-6 edges; maximal simple planar graphs; 3-connected planar triangulations; 3-connected triangulations of the sphere; 3-connected cubic planar graphs.
export default function* A000109() {
    for (const n of [1, 1, 1, 2, 5, 14, 50, 233, 1249, 7595, 49566, 339722, 2406841, 17490241, 129664753, 977526957, 7475907149, 57896349553, 453382272049, 3585853662949, 28615703421545, ]) {
        yield n
    }
}
