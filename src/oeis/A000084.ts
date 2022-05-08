// Number of series-parallel networks with n unlabeled edges. Also called yoke-chains by Cayley and MacMahon.
export default function* A000084(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    4n,
    10n,
    24n,
    66n,
    180n,
    522n,
    1532n,
    4624n,
    14136n,
    43930n,
    137908n,
    437502n,
    1399068n,
    4507352n,
    14611576n,
    47633486n,
    156047204n,
    513477502n,
    1696305728n,
    5623993944n,
    18706733128n,
    62408176762n,
    208769240140n,
    700129713630n,
    2353386723912n,
  ]) {
    yield n
  }
}
