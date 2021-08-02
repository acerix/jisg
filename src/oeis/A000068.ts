// Numbers n such that n^4 + 1 is prime.
export default function* A000068(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 6n, 16n, 20n, 24n, 28n, 34n, 46n, 48n, 54n, 56n, 74n, 80n, 82n, 88n, 90n, 106n, 118n, 132n, 140n, 142n, 154n, 160n, 164n, 174n, 180n, 194n, 198n, 204n, 210n, 220n, 228n, 238n, 242n, 248n, 254n, 266n, 272n, 276n, 278n, 288n, 296n, 312n, 320n, 328n, 334n, 340n, 352n, 364n, 374n, 414n, 430n, 436n, 442n, 466n, ]) {
    yield n
  }
}
