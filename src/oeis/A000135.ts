// Number of partitions into non-integral powers.
export default function* A000135(): Generator<bigint> {
  for (const n of [1n, 2n, 6n, 13n, 24n, 42n, 73n, 125n, 204n, 324n, 511n, 801n, 1228n, 1856n, 2780n, 4135n, 6084n, 8873n, 12847n, 18481n, 26416n, 37473n, 52871n, 74216n, 103596n, 143841n, 198839n, 273654n, 374987n, 511735n, 695559n, 941932n, 1271139n, 1709474n, 2291195n, 3061385n, 4078152n, 5416322n, ]) {
    yield n
  }
}
