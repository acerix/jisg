// Number of asymmetrical dissections of n-gon.
export default function* A000131(): Generator<bigint> {
  for (const n of [
    2n,
    5n,
    21n,
    61n,
    214n,
    669n,
    2240n,
    7330n,
    24695n,
    83257n,
    284928n,
    981079n,
    3410990n,
    11937328n,
    42075242n,
    149171958n,
    531866972n,
    1905842605n,
    6861162880n,
    24805692978n,
    90035940227n,
    327987890608n,
    1198853954688n,
    4395797189206n,
    16165195705544n,
    59609156824273n,
    220373268471398n,
    816677398144221n,
  ]) {
    yield n
  }
}
