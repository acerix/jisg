// Number of mixed Husimi trees with n nodes; or polygonal cacti with bridges.
export default function* A000083(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    1n,
    2n,
    4n,
    9n,
    23n,
    63n,
    188n,
    596n,
    1979n,
    6804n,
    24118n,
    87379n,
    322652n,
    1209808n,
    4596158n,
    17657037n,
    68497898n,
    268006183n,
    1056597059n,
    4193905901n,
    16748682185n,
    67258011248n,
    271452424286n,
    1100632738565n,
    4481533246014n,
  ]) {
    yield n
  }
}
