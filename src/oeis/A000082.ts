// a(n) = n^2*Product_{p|n} (1 + 1/p).
export default function* A000082(): Generator<bigint> {
  for (const n of [1n, 6n, 12n, 24n, 30n, 72n, 56n, 96n, 108n, 180n, 132n, 288n, 182n, 336n, 360n, 384n, 306n, 648n, 380n, 720n, 672n, 792n, 552n, 1152n, 750n, 1092n, 972n, 1344n, 870n, 2160n, 992n, 1536n, 1584n, 1836n, 1680n, 2592n, 1406n, 2280n, 2184n, 2880n, 1722n, 4032n, 1892n, 3168n, 3240n, 3312n, 2256n, ]) {
    yield n
  }
}
