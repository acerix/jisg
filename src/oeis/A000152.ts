// Number of ways of writing n as a sum of 16 squares.
export default function* A000152(): Generator<bigint> {
  for (const n of [
    1n,
    32n,
    480n,
    4480n,
    29152n,
    140736n,
    525952n,
    1580800n,
    3994080n,
    8945824n,
    18626112n,
    36714624n,
    67978880n,
    118156480n,
    197120256n,
    321692928n,
    509145568n,
    772845120n,
    1143441760n,
    1681379200n,
    2428524096n,
    3392205824n,
    4658843520n,
    6411152640n,
  ]) {
    yield n
  }
}
