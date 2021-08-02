// Number of integers <= 2^n of form x^2 - 2y^2.
export default function* A000047(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 5n, 8n, 15n, 26n, 48n, 87n, 161n, 299n, 563n, 1066n, 2030n, 3885n, 7464n, 14384n, 27779n, 53782n, 104359n, 202838n, 394860n, 769777n, 1502603n, 2936519n, 5744932n, 11249805n, 22048769n, 43248623n, 84894767n, 166758141n, 327770275n, 644627310n, 1268491353n, 2497412741n, ]) {
    yield n
  }
}
