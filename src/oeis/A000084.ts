// Number of series-parallel networks with n unlabeled edges. Also called yoke-chains by Cayley and MacMahon.
export default function* A000084(): Generator<number> {
  for (const n of [1, 2, 4, 10, 24, 66, 180, 522, 1532, 4624, 14136, 43930, 137908, 437502, 1399068, 4507352, 14611576, 47633486, 156047204, 513477502, 1696305728, 5623993944, 18706733128, 62408176762, 208769240140, 700129713630, 2353386723912, ]) {
    yield n
  }
}
