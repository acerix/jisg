// Number of ways of writing n as a sum of 5 squares.
export default function* A000132(): Generator<bigint> {
  for (const n of [1n, 10n, 40n, 80n, 90n, 112n, 240n, 320n, 200n, 250n, 560n, 560n, 400n, 560n, 800n, 960n, 730n, 480n, 1240n, 1520n, 752n, 1120n, 1840n, 1600n, 1200n, 1210n, 2000n, 2240n, 1600n, 1680n, 2720n, 3200n, 1480n, 1440n, 3680n, 3040n, 2250n, 2800n, 3280n, 4160n, 2800n, 1920n, 4320n, 5040n, 2800n, 3472n, 5920n, ]) {
    yield n
  }
}
