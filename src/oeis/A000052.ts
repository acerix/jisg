// 1-digit numbers arranged in alphabetical order, then the 2-digit numbers arranged in alphabetical order, then the 3-digit numbers, etc.
export default function* A000052(): Generator<number> {
  for (const n of [8, 5, 4, 9, 1, 7, 6, 3, 2, 0, 18, 80, 88, 85, 84, 89, 81, 87, 86, 83, 82, 11, 15, 50, 58, 55, 54, 59, 51, 57, 56, 53, 52, 40, 48, 45, 44, 49, 41, 47, 46, 43, 42, 14, 19, 90, 98, 95, 94, 99, 91, 97, 96, 93, 92, 17, 70, 78, 75, 74, 79, 71, 77, 76, 73, 72, ]) {
    yield n
  }
}
