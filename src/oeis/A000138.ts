// E.g.f. exp(-x^4/4)/(1-x).
export default function* A000138(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    6n,
    18n,
    90n,
    540n,
    3780n,
    31500n,
    283500n,
    2835000n,
    31185000n,
    372972600n,
    4848643800n,
    67881013200n,
    1018215198000n,
    16294848570000n,
    277012425690000n,
    4986223662420000n,
    94738249585980000n,
    1894745192712372000n,
  ]) {
    yield n
  }
}
