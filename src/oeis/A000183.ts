// Number of discordant permutations of length n.
export default function* A000183(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    0n,
    1n,
    2n,
    20n,
    144n,
    1265n,
    12072n,
    126565n,
    1445100n,
    17875140n,
    238282730n,
    3407118041n,
    52034548064n,
    845569542593n,
    14570246018686n,
    265397214435860n,
    5095853023109484n,
    102877234050493609n,
    2178674876680100744n,
    48296053720501168037n,
    1118480911876659396600n,
  ]) {
    yield n
  }
}
