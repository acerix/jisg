// Number of positive integers <= 2^n of form x^2 + 3 y^2.
export default function* A000205(): Generator<bigint> {
  for (const n of [1n, 1n, 3n, 4n, 8n, 14n, 25n, 45n, 82n, 151n, 282n, 531n, 1003n, 1907n, 3645n, 6993n, 13456n, 25978n, 50248n, 97446n, 189291n, 368338n, 717804n, 1400699n, 2736534n, 5352182n, 10478044n, 20531668n, 40264582n, 79022464n, 155196838n, 304997408n, 599752463n, 1180027022n, 2322950591n, 4575114295n, ]) {
    yield n
  }
}
