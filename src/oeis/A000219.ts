// Number of planar partitions (or plane partitions) of n.
export default function* A000219(): Generator<bigint> {
  for (const n of [1n, 1n, 3n, 6n, 13n, 24n, 48n, 86n, 160n, 282n, 500n, 859n, 1479n, 2485n, 4167n, 6879n, 11297n, 18334n, 29601n, 47330n, 75278n, 118794n, 186475n, 290783n, 451194n, 696033n, 1068745n, 1632658n, 2483234n, 3759612n, 5668963n, 8512309n, 12733429n, 18974973n, 28175955n, 41691046n, 61484961n, 90379784n, 132441995n, 193487501n, 281846923n, ]) {
    yield n
  }
}
