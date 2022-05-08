// Tangent (or "Zag") numbers: e.g.f. tan(x), also (up to signs) e.g.f. tanh(x).
export default function* A000182(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    16n,
    272n,
    7936n,
    353792n,
    22368256n,
    1903757312n,
    209865342976n,
    29088885112832n,
    4951498053124096n,
    1015423886506852352n,
    246921480190207983616n,
    70251601603943959887872n,
    23119184187809597841473536n,
  ]) {
    yield n
  }
}
