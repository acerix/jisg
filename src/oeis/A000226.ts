// Number of n-node unlabeled connected graphs with one cycle of length 3.
export default function* A000226(): Generator<bigint> {
  for (const n of [1n, 1n, 3n, 7n, 18n, 44n, 117n, 299n, 793n, 2095n, 5607n, 15047n, 40708n, 110499n, 301541n, 825784n, 2270211n, 6260800n, 17319689n, 48042494n, 133606943n, 372430476n, 1040426154n, 2912415527n, 8167992598n, 22947778342n, 64577555147n, 182009003773n, 513729375064n, 1452007713130n, ]) {
    yield n
  }
}
