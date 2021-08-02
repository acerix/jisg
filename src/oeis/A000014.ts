// Number of series-reduced trees with n nodes.
export default function* A000014(): Generator<bigint> {
  for (const n of [0n, 1n, 1n, 0n, 1n, 1n, 2n, 2n, 4n, 5n, 10n, 14n, 26n, 42n, 78n, 132n, 249n, 445n, 842n, 1561n, 2988n, 5671n, 10981n, 21209n, 41472n, 81181n, 160176n, 316749n, 629933n, 1256070n, 2515169n, 5049816n, 10172638n, 20543579n, 41602425n, 84440886n, 171794492n, 350238175n, 715497037n, 1464407113n, ]) {
    yield n
  }
}
