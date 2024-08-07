// Ménage numbers: a(0) = 1, a(1) = -1, and for n >= 2, a(n) = number of permutations s of [0, ..., n-1] such that s(i) != i and s(i) != i+1 (mod n) for all i.
export default function* A000179(): Generator<bigint> {
  for (const n of [
    1n,
    -1n,
    0n,
    1n,
    2n,
    13n,
    80n,
    579n,
    4738n,
    43387n,
    439792n,
    4890741n,
    59216642n,
    775596313n,
    10927434464n,
    164806435783n,
    2649391469058n,
    45226435601207n,
    817056406224416n,
    15574618910994665n,
    312400218671253762n,
    6577618644576902053n,
    145051250421230224304n,
    3343382818203784146955n,
    80399425364623070680706n,
    2013619745874493923699123n,
  ]) {
    yield n
  }
}
