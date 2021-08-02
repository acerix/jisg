// Number of n-bead necklaces with 2 colors when turning over is not allowed; also number of output sequences from a simple n-stage cycling shift register; also number of binary irreducible polynomials whose degree divides n.
export default function* A000031(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 4n, 6n, 8n, 14n, 20n, 36n, 60n, 108n, 188n, 352n, 632n, 1182n, 2192n, 4116n, 7712n, 14602n, 27596n, 52488n, 99880n, 190746n, 364724n, 699252n, 1342184n, 2581428n, 4971068n, 9587580n, 18512792n, 35792568n, 69273668n, 134219796n, 260301176n, 505294128n, 981706832n, ]) {
    yield n
  }
}
