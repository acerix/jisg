// Number of ways of writing n as a sum of 4 squares; also theta series of lattice Z^4.
export default function* A000118(): Generator<number> {
  for (const n of [1, 8, 24, 32, 24, 48, 96, 64, 24, 104, 144, 96, 96, 112, 192, 192, 24, 144, 312, 160, 144, 256, 288, 192, 96, 248, 336, 320, 192, 240, 576, 256, 24, 384, 432, 384, 312, 304, 480, 448, 144, 336, 768, 352, 288, 624, 576, 384, 96, 456, 744, 576, 336, 432, 960, 576, 192, ]) {
    yield n
  }
}
