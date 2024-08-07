// Number of even sequences with period 2n (bisection of A000013).
export default function* A000116(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    4n,
    8n,
    20n,
    56n,
    180n,
    596n,
    2068n,
    7316n,
    26272n,
    95420n,
    349716n,
    1290872n,
    4794088n,
    17896832n,
    67110932n,
    252648992n,
    954444608n,
    3616828364n,
    13743921632n,
    52357746896n,
    199911300472n,
    764877836468n,
    2932031358484n,
    11258999739560n,
    43303843861744n,
    166799988689300n,
  ]) {
    yield n
  }
}
