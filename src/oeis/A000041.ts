// a(n) is the number of partitions of n (the partition numbers).
export default function* A000041(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 3n, 5n, 7n, 11n, 15n, 22n, 30n, 42n, 56n, 77n, 101n, 135n, 176n, 231n, 297n, 385n, 490n, 627n, 792n, 1002n, 1255n, 1575n, 1958n, 2436n, 3010n, 3718n, 4565n, 5604n, 6842n, 8349n, 10143n, 12310n, 14883n, 17977n, 21637n, 26015n, 31185n, 37338n, 44583n, 53174n, 63261n, 75175n, 89134n, 105558n, 124754n, 147273n, 173525n, ]) {
    yield n
  }
}
