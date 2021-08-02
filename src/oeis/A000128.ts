// A nonlinear binomial sum.
export default function* A000128(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 8n, 16n, 31n, 58n, 105n, 185n, 319n, 541n, 906n, 1503n, 2476n, 4058n, 6626n, 10790n, 17537n, 28464n, 46155n, 74791n, 121137n, 196139n, 317508n, 513901n, 831686n, 1345888n, 2177900n, 3524140n, 5702419n, 9226966n, 14929821n, 24157253n, 39087571n, 63245353n, 102333486n, ]) {
    yield n
  }
}
