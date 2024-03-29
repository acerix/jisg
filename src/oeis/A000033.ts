// Coefficients of ménage hit polynomials.
export default function* A000033(): Generator<bigint> {
  for (const n of [
    0n,
    2n,
    3n,
    4n,
    40n,
    210n,
    1477n,
    11672n,
    104256n,
    1036050n,
    11338855n,
    135494844n,
    1755206648n,
    24498813794n,
    366526605705n,
    5851140525680n,
    99271367764480n,
    1783734385752162n,
    33837677493828171n,
    675799125332580020n,
    14173726082929399560n,
    311462297063636041906n,
  ]) {
    yield n
  }
}
