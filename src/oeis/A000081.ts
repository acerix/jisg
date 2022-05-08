// Number of unlabeled rooted trees with n nodes (or connected functions with a fixed point).
export default function* A000081(): Generator<bigint> {
  for (const n of [
    0n,
    1n,
    1n,
    2n,
    4n,
    9n,
    20n,
    48n,
    115n,
    286n,
    719n,
    1842n,
    4766n,
    12486n,
    32973n,
    87811n,
    235381n,
    634847n,
    1721159n,
    4688676n,
    12826228n,
    35221832n,
    97055181n,
    268282855n,
    743724984n,
    2067174645n,
    5759636510n,
    16083734329n,
    45007066269n,
    126186554308n,
    354426847597n,
  ]) {
    yield n
  }
}
