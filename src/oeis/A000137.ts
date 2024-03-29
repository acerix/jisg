// Series-parallel numbers.
export default function* A000137(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    6n,
    18n,
    58n,
    186n,
    614n,
    2034n,
    6818n,
    22970n,
    77858n,
    264970n,
    905294n,
    3102434n,
    10661370n,
    36722642n,
    126752218n,
    438294018n,
    1518032598n,
    5265341314n,
    18286911130n,
    63586988434n,
    221342104842n,
    771235606050n,
    2689688538646n,
    9388096331642n,
  ]) {
    yield n
  }
}
