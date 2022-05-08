// Coefficients of ménage hit polynomials
export default function* A000222(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    1n,
    3n,
    6n,
    38n,
    213n,
    1479n,
    11692n,
    104364n,
    1036809n,
    11344859n,
    135548466n,
    1755739218n,
    24504637741n,
    366596136399n,
    5852040379224n,
    99283915922264n,
    1783921946910417n,
    33840669046326579n,
    675849838112277598n,
    14174636583759324798n,
  ]) {
    yield n
  }
}
