// Number of positive integers <= 2^n of form x^2 + 4 y^2.
export default function* A000072(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 4n, 7n, 12n, 22n, 41n, 72n, 137n, 254n, 476n, 901n, 1716n, 3274n, 6286n, 12090n, 23331n, 45140n, 87511n, 169972n, 330752n, 644499n, 1257523n, 2456736n, 4804666n, 9405749n, 18429828n, 36141339n, 70928099n, 139295793n, 273741700n, 538277486n, 1059051586n, 2084763319n, 4105924366n, ]) {
    yield n
  }
}
