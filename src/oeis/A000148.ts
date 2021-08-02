// Number of partitions into non-integral powers.
export default function* A000148(): Generator<bigint> {
  for (const n of [1n, 2n, 7n, 15n, 28n, 45n, 70n, 100n, 138n, 183n, 242n, 310n, 388n, 481n, 583n, 701n, 838n, 984n, 1152n, 1337n, 1535n, 1757n, 2001n, 2262n, 2545n, 2855n, 3183n, 3540n, 3926n, 4335n, 4770n, 5233n, 5728n, 6248n, 6801n, 7388n, 8005n, 8658n, 9345n, 10064n, 10824n, 11620n, 12452n, 13324n, 14236n, ]) {
    yield n
  }
}
