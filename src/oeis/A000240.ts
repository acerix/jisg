// Rencontres numbers: number of permutations of [n] with exactly one fixed point.
export default function* A000240(): Generator<bigint> {
  for (const n of [
    1n,
    0n,
    3n,
    8n,
    45n,
    264n,
    1855n,
    14832n,
    133497n,
    1334960n,
    14684571n,
    176214840n,
    2290792933n,
    32071101048n,
    481066515735n,
    7697064251744n,
    130850092279665n,
    2355301661033952n,
    44750731559645107n,
    895014631192902120n,
    18795307255050944541n,
    413496759611120779880n,
  ]) {
    yield n
  }
}
