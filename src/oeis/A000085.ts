// Number of self-inverse permutations on n letters, also known as involutions; number of standard Young tableaux with n cells.
export default function* A000085(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 4n, 10n, 26n, 76n, 232n, 764n, 2620n, 9496n, 35696n, 140152n, 568504n, 2390480n, 10349536n, 46206736n, 211799312n, 997313824n, 4809701440n, 23758664096n, 119952692896n, 618884638912n, 3257843882624n, 17492190577600n, 95680443760576n, 532985208200576n, 3020676745975552n, ]) {
    yield n
  }
}
