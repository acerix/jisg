// Number of self-complementary graphs with n nodes.
export default function* A000171(): Generator<bigint> {
  for (const n of [
    1n,
    0n,
    0n,
    1n,
    2n,
    0n,
    0n,
    10n,
    36n,
    0n,
    0n,
    720n,
    5600n,
    0n,
    0n,
    703760n,
    11220000n,
    0n,
    0n,
    9168331776n,
    293293716992n,
    0n,
    0n,
    1601371799340544n,
    102484848265030656n,
    0n,
    0n,
    3837878966366932639744n,
    491247277315343649710080n,
    0n,
    0n,
  ]) {
    yield n
  }
}
