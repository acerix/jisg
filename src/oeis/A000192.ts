// Generalized Euler numbers c(6,n).
export default function* A000192(): Generator<bigint> {
  for (const n of [
    2n,
    46n,
    7970n,
    3487246n,
    2849229890n,
    3741386059246n,
    7205584123783010n,
    19133892392367261646n,
    67000387673723462963330n,
    299131045427247559446422446n,
    1658470810032820740402966226850n,
  ]) {
    yield n
  }
}
