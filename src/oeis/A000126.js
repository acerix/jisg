// A nonlinear binomial sum.
export default function* A000126() {
    for (const n of [1, 2, 4, 8, 15, 27, 47, 80, 134, 222, 365, 597, 973, 1582, 2568, 4164, 6747, 10927, 17691, 28636, 46346, 75002, 121369, 196393, 317785, 514202, 832012, 1346240, 2178279, 3524547, 5702855, 9227432, 14930318, 24157782, 39088133, 63245949, ]) {
        yield n
    }
}
