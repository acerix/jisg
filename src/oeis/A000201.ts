// Lower Wythoff sequence (a Beatty sequence): a(n) = floor(n*phi), where phi = (1+sqrt(5))/2 = A001622.
export default function* A000201(): Generator<bigint> {
  for (const n of [
    1n,
    3n,
    4n,
    6n,
    8n,
    9n,
    11n,
    12n,
    14n,
    16n,
    17n,
    19n,
    21n,
    22n,
    24n,
    25n,
    27n,
    29n,
    30n,
    32n,
    33n,
    35n,
    37n,
    38n,
    40n,
    42n,
    43n,
    45n,
    46n,
    48n,
    50n,
    51n,
    53n,
    55n,
    56n,
    58n,
    59n,
    61n,
    63n,
    64n,
    66n,
    67n,
    69n,
    71n,
    72n,
    74n,
    76n,
    77n,
    79n,
    80n,
    82n,
    84n,
    85n,
    87n,
    88n,
    90n,
    92n,
    93n,
    95n,
    97n,
    98n,
    100n,
    101n,
    103n,
    105n,
    106n,
    108n,
    110n,
  ]) {
    yield n
  }
}
