// Number of n-celled polyominoes without holes.
export default function* A000104(): Generator<number> {
  for (const n of [1, 1, 1, 2, 5, 12, 35, 107, 363, 1248, 4460, 16094, 58937, 217117, 805475, 3001127, 11230003, 42161529, 158781106, 599563893, 2269506062, 8609442688, 32725637373, 124621833354, 475368834568, 1816103345752, 6948228104703, ]) {
    yield n
  }
}
