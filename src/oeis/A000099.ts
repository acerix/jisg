// Let A(n) = #{(i,j): i^2 + j^2 <= n}, V(n) = Pi*n, P(n) = A(n) - V(n); sequence gives values of n where |P(n)| sets a new record.
export default function* A000099(): Generator<bigint> {
  for (const n of [1n, 2n, 5n, 10n, 20n, 24n, 26n, 41n, 53n, 130n, 149n, 205n, 234n, 287n, 340n, 410n, 425n, 480n, 586n, 840n, 850n, 986n, 1680n, 1843n, 2260n, 2591n, 3023n, 3024n, 3400n, 3959n, 3960n, 5182n, 5183n, 7920n, 9796n, 11233n, 14883n, 15119n, 15120n, 19593n, 21600n, 21603n, 21604n, 22177n, 28559n, 28560n, ]) {
    yield n
  }
}
