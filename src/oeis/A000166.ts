// Subfactorial or rencontres numbers, or derangements: number of permutations of n elements with no fixed points.
export default function* A000166(): Generator<bigint> {
  for (const n of [
    1n,
    0n,
    1n,
    2n,
    9n,
    44n,
    265n,
    1854n,
    14833n,
    133496n,
    1334961n,
    14684570n,
    176214841n,
    2290792932n,
    32071101049n,
    481066515734n,
    7697064251745n,
    130850092279664n,
    2355301661033953n,
    44750731559645106n,
    895014631192902121n,
    18795307255050944540n,
    413496759611120779881n,
    9510425471055777937262n,
  ]) {
    yield n
  }
}
