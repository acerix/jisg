// Number of hexagonal polyominoes (or hexagonal polyforms, or planar polyhexes) with n cells.
export default function* A000228(): Generator<number> {
  for (const n of [1, 1, 3, 7, 22, 82, 333, 1448, 6572, 30490, 143552, 683101, 3274826, 15796897, 76581875, 372868101, 1822236628, 8934910362, 43939164263, 216651036012, 1070793308942, ]) {
    yield n
  }
}
