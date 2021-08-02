// Primes dividing all Fibonacci sequences.
export default function* A000057(): Generator<bigint> {
  for (const n of [2n, 3n, 7n, 23n, 43n, 67n, 83n, 103n, 127n, 163n, 167n, 223n, 227n, 283n, 367n, 383n, 443n, 463n, 467n, 487n, 503n, 523n, 547n, 587n, 607n, 643n, 647n, 683n, 727n, 787n, 823n, 827n, 863n, 883n, 887n, 907n, 947n, 983n, 1063n, 1123n, 1163n, 1187n, 1283n, 1303n, 1327n, 1367n, 1423n, 1447n, 1487n, 1543n, ]) {
    yield n
  }
}
