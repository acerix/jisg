// Denumerants: Expansion of 1/((1-x)*(1-x^2)*(1-x^5)).
export default function* A000115(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n,
    8n,
    10n,
    11n,
    13n,
    14n,
    16n,
    18n,
    20n,
    22n,
    24n,
    26n,
    29n,
    31n,
    34n,
    36n,
    39n,
    42n,
    45n,
    48n,
    51n,
    54n,
    58n,
    61n,
    65n,
    68n,
    72n,
    76n,
    80n,
    84n,
    88n,
    92n,
    97n,
    101n,
    106n,
    110n,
    115n,
    120n,
    125n,
    130n,
    135n,
    140n,
    146n,
    151n,
    157n,
    162n,
    168n,
    174n,
    180n,
    186n,
    192n,
    198n,
    205n,
    211n,
    218n,
    224n,
    231n,
    238n,
  ]) {
    yield n
  }
}
