// Number of asymmetric trees with n nodes (also called identity trees).
export default function* A000220(): Generator<bigint> {
  for (const n of [1n, 0n, 0n, 0n, 0n, 0n, 1n, 1n, 3n, 6n, 15n, 29n, 67n, 139n, 310n, 667n, 1480n, 3244n, 7241n, 16104n, 36192n, 81435n, 184452n, 418870n, 955860n, 2187664n, 5025990n, 11580130n, 26765230n, 62027433n, 144133676n, 335731381n, 783859852n, 1834104934n, 4300433063n, 10102854473n, 23778351222n, ]) {
    yield n
  }
}
