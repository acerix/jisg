// Number of positive integers <= 2^n of form x^2 + 10 y^2.
export default function* A000024(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 7n, 10n, 20n, 36n, 65n, 118n, 221n, 409n, 776n, 1463n, 2788n, 5328n, 10222n, 19714n, 38054n, 73685n, 142944n, 277838n, 540889n, 1054535n, 2058537n, 4023278n, 7871313n, 15414638n, 30213190n, 59266422n, 116343776n, 228545682n, 449240740n, 883570480n, 1738769611n, 3423469891n, 6743730746n, ]) {
    yield n
  }
}
