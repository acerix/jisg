// Number of planar partitions (or plane partitions) of n.
export default function* A000219(): Generator<number> {
  for (const n of [1, 1, 3, 6, 13, 24, 48, 86, 160, 282, 500, 859, 1479, 2485, 4167, 6879, 11297, 18334, 29601, 47330, 75278, 118794, 186475, 290783, 451194, 696033, 1068745, 1632658, 2483234, 3759612, 5668963, 8512309, 12733429, 18974973, 28175955, 41691046, 61484961, 90379784, 132441995, 193487501, 281846923, ]) {
    yield n
  }
}
