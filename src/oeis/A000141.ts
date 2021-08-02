// Number of ways of writing n as a sum of 6 squares.
export default function* A000141(): Generator<bigint> {
  for (const n of [1n, 12n, 60n, 160n, 252n, 312n, 544n, 960n, 1020n, 876n, 1560n, 2400n, 2080n, 2040n, 3264n, 4160n, 4092n, 3480n, 4380n, 7200n, 6552n, 4608n, 8160n, 10560n, 8224n, 7812n, 10200n, 13120n, 12480n, 10104n, 14144n, 19200n, 16380n, 11520n, 17400n, 24960n, 18396n, 16440n, 24480n, 27200n, ]) {
    yield n
  }
}
