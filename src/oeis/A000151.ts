// Number of oriented rooted trees with n nodes. Also rooted trees with n nodes and 2-colored non-root nodes.
export default function* A000151(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    7n,
    26n,
    107n,
    458n,
    2058n,
    9498n,
    44947n,
    216598n,
    1059952n,
    5251806n,
    26297238n,
    132856766n,
    676398395n,
    3466799104n,
    17873508798n,
    92630098886n,
    482292684506n,
    2521610175006n,
    13233573019372n,
    69687684810980n,
    368114512431638n,
    1950037285256658n,
    10357028326495097n,
    55140508518522726n,
    294219119815868952n,
    1573132563600386854n,
    8427354035116949486n,
    45226421721391554194n,
  ]) {
    yield n
  }
}
