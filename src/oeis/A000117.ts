// Number of even sequences with period 2n (bisection of A000011).
export default function* A000117(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    4n,
    8n,
    18n,
    44n,
    122n,
    362n,
    1162n,
    3914n,
    13648n,
    48734n,
    176906n,
    649532n,
    2405236n,
    8964800n,
    33588234n,
    126390032n,
    477353376n,
    1808676326n,
    6872485104n,
    26179922024n,
    99957747388n,
    382443112538n,
    1466024067850n,
    5629516646996n,
    21651955485304n,
    83400061453514n,
  ]) {
    yield n
  }
}
