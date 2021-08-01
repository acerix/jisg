// Number of n-bead necklaces with 2 colors when turning over is not allowed; also number of output sequences from a simple n-stage cycling shift register; also number of binary irreducible polynomials whose degree divides n.
export default function* A000031(): Generator<number> {
  for (const n of [1, 2, 3, 4, 6, 8, 14, 20, 36, 60, 108, 188, 352, 632, 1182, 2192, 4116, 7712, 14602, 27596, 52488, 99880, 190746, 364724, 699252, 1342184, 2581428, 4971068, 9587580, 18512792, 35792568, 69273668, 134219796, 260301176, 505294128, 981706832, ]) {
    yield n
  }
}
