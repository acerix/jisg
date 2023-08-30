// Number of elements in the n-th period of the periodic table as predicted by the Aufbau principle.
export default function* A093907(): Generator<bigint> {
  for (let n = 1n; ; n++) {
    yield ( 2n*n + 3n + (-1n)**n ) ** 2n / 8n
  }
}
