// Number of mixed Husimi trees with n nodes; or polygonal cacti with bridges.
export default function* A000083(): Generator<number> {
  for (const n of [1, 1, 1, 2, 4, 9, 23, 63, 188, 596, 1979, 6804, 24118, 87379, 322652, 1209808, 4596158, 17657037, 68497898, 268006183, 1056597059, 4193905901, 16748682185, 67258011248, 271452424286, 1100632738565, 4481533246014, ]) {
    yield n
  }
}
