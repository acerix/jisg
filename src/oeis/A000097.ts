// Number of partitions of n if there are two kinds of 1's and two kinds of 2's.
export default function* A000097(): Generator<number> {
  for (const n of [1, 2, 5, 9, 17, 28, 47, 73, 114, 170, 253, 365, 525, 738, 1033, 1422, 1948, 2634, 3545, 4721, 6259, 8227, 10767, 13990, 18105, 23286, 29837, 38028, 48297, 61053, 76926, 96524, 120746, 150487, 187019, 231643, 286152, 352413, 432937, 530383, 648245, ]) {
    yield n
  }
}
