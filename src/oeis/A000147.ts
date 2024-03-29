// Number of trees of diameter 5.
export default function* A000147(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    0n,
    0n,
    0n,
    1n,
    2n,
    7n,
    14n,
    32n,
    58n,
    110n,
    187n,
    322n,
    519n,
    839n,
    1302n,
    2015n,
    3032n,
    4542n,
    6668n,
    9738n,
    14006n,
    20036n,
    28324n,
    39830n,
    55473n,
    76875n,
    105692n,
    144629n,
    196585n,
    266038n,
    357952n,
    479664n,
    639519n,
    849425n,
    1123191n,
    1479972n,
    1942284n,
    2540674n,
    3311415n,
  ]) {
    yield n
  }
}
