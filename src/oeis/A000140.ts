// Kendall-Mann numbers: the maximal number of inversions in a permutation on n letters is floor(n(n-1)/4); a(n) is the number of permutations with this many inversions.
export default function* A000140(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    6n,
    22n,
    101n,
    573n,
    3836n,
    29228n,
    250749n,
    2409581n,
    25598186n,
    296643390n,
    3727542188n,
    50626553988n,
    738680521142n,
    11501573822788n,
    190418421447330n,
    3344822488498265n,
    62119523114983224n,
    1214967840930909302n,
    24965661442811799655n,
    538134522243713149122n
  ]) {
    yield n
  }
}
