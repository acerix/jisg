// Erroneous version of A032522.
export default function* A000017(): Generator<bigint> {
  for (const n of [1n, 0n, 0n, 2n, 2n, 4n, 8n, 4n, 16n, 12n, 48n, 80n, 136n, 420n, 1240n, 2872n, 7652n, 18104n, 50184n, ]) {
    yield n
  }
}
