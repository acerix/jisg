// Number of self-inverse permutations on n letters, also known as involutions; number of standard Young tableaux with n cells.
export default function* A000085(): Generator<number> {
  for (const n of [1, 1, 2, 4, 10, 26, 76, 232, 764, 2620, 9496, 35696, 140152, 568504, 2390480, 10349536, 46206736, 211799312, 997313824, 4809701440, 23758664096, 119952692896, 618884638912, 3257843882624, 17492190577600, 95680443760576, 532985208200576, 3020676745975552, ]) {
    yield n
  }
}
