// Number of hexagonal polyominoes (or hexagonal polyforms, or planar polyhexes) with n cells.
export default function* A000228(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    3n,
    7n,
    22n,
    82n,
    333n,
    1448n,
    6572n,
    30490n,
    143552n,
    683101n,
    3274826n,
    15796897n,
    76581875n,
    372868101n,
    1822236628n,
    8934910362n,
    43939164263n,
    216651036012n,
    1070793308942n,
  ]) {
    yield n
  }
}
