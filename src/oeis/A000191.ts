// Generalized tangent numbers d(3, n).
export default function* A000191(): Generator<bigint> {
  for (const n of [
    2n,
    46n,
    3362n,
    515086n,
    135274562n,
    54276473326n,
    30884386347362n,
    23657073914466766n,
    23471059057478981762n,
    29279357851856595135406n,
    44855282210826271011257762n,
    82787899853638102222862479246n,
    181184428895772987376073015175362n,
    463938847087789978515380344866258286n,
  ]) {
    yield n
  }
}
