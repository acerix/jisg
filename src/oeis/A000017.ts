// Erroneous version of A032522.
export default function* A000017(): Generator<number> {
  for (const n of [1, 0, 0, 2, 2, 4, 8, 4, 16, 12, 48, 80, 136, 420, 1240, 2872, 7652, 18104, 50184, ]) {
    yield n
  }
}
