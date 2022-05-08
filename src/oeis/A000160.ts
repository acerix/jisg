// Number of partitions into non-integral powers.
export default function* A000160(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    8n,
    21n,
    48n,
    99n,
    186n,
    330n,
    556n,
    895n,
    1397n,
    2107n,
    3097n,
    4459n,
    6264n,
    8644n,
    11760n,
    15742n,
    20790n,
    27128n,
    34993n,
    44664n,
    56473n,
    70784n,
    87995n,
    108564n,
    132970n,
    161828n,
    195686n,
    235274n,
    281349n,
    334682n,
    396202n,
    466849n,
    547712n,
    639935n,
    744716n,
    863443n,
  ]) {
    yield n
  }
}
