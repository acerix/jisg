// Kendall-Mann numbers: the maximal number of inversions in a permutation on n letters is floor(n(n-1)/4); a(n) is the number of permutations with this many inversions.
export default function* A000140(): Generator<number> {
  for (const n of [1, 1, 2, 6, 22, 101, 573, 3836, 29228, 250749, 2409581, 25598186, 296643390, 3727542188, 50626553988, 738680521142, 11501573822788, 190418421447330, 3344822488498265, 62119523114983224, 1214967840930909302, ]) {
    yield n
  }
}
