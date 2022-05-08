// Number of free polyominoes (or square animals) with n cells.
export default function* A000105(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    1n,
    2n,
    5n,
    12n,
    35n,
    108n,
    369n,
    1285n,
    4655n,
    17073n,
    63600n,
    238591n,
    901971n,
    3426576n,
    13079255n,
    50107909n,
    192622052n,
    742624232n,
    2870671950n,
    11123060678n,
    43191857688n,
    168047007728n,
    654999700403n,
    2557227044764n,
    9999088822075n,
    39153010938487n,
    153511100594603n,
  ]) {
    yield n
  }
}
