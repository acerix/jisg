// Number of symmetric relations on n nodes
export default function* A000666(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    6n,
    20n,
    90n,
    544n,
    5096n,
    79264n,
    2208612n,
    113743760n,
    10926227136n,
    1956363435360n,
    652335084592096n,
    405402273420996800n,
    470568642161119963904n,
    1023063423471189431054720n,
    4178849203082023236058229792n,
    32168008290073542372004082199424n,
  ]) {
    yield n
  }
}
