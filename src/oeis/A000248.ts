// Expansion of e.g.f. exp(x*exp(x)).
export default function* A000248(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    3n,
    10n,
    41n,
    196n,
    1057n,
    6322n,
    41393n,
    293608n,
    2237921n,
    18210094n,
    157329097n,
    1436630092n,
    13810863809n,
    139305550066n,
    1469959371233n,
    16184586405328n,
    185504221191745n,
    2208841954063318n,
    27272621155678841n,
    348586218389733556n,
    4605223387997411873n,
  ]) {
    yield n
  }
}
