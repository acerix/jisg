// Let A(n) = #{(i,j): i^2 + j^2 <= n}, V(n) = Pi*n, P(n) = A(n) - V(n); sequence gives values of n where |P(n)| sets a new record.
export default function* A000099(): Generator<number> {
  for (const n of [1, 2, 5, 10, 20, 24, 26, 41, 53, 130, 149, 205, 234, 287, 340, 410, 425, 480, 586, 840, 850, 986, 1680, 1843, 2260, 2591, 3023, 3024, 3400, 3959, 3960, 5182, 5183, 7920, 9796, 11233, 14883, 15119, 15120, 19593, 21600, 21603, 21604, 22177, 28559, 28560, ]) {
    yield n
  }
}
