// Number of elements in the n-th period of the periodic table as predicted by the Aufbau principle.
export default function* A093907(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    // i.e. (2n + 3 + (-1)^n)^2 / 8
    yield ( 2n*n + 3n + (-1n)**n ) ** 2n / 8n
  }
}
