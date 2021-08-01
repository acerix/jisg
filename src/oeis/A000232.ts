// Construct a triangle as in A036262. Sequence is one less than the position of the first number larger than 2 in the n-th row (n-th difference).
export default function* A000232(): Generator<number> {
  for (const n of [3, 8, 14, 14, 25, 24, 23, 22, 25, 59, 98, 97, 98, 97, 174, 176, 176, 176, 176, 291, 290, 289, 740, 874, 873, 872, 873, 872, 871, 870, 869, 868, 867, 866, 2180, 2179, 2178, 2177, 2771, 2770, 2769, 2768, 2767, 2766, 2765, 2764, 2763, 2763, 2763, 2763, 3366, 4208, 4207, ]) {
    yield n
  }
}
