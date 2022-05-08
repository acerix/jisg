// Bell or exponential numbers: number of ways to partition a set of n labeled elements.
export default function* A000110(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    5n,
    15n,
    52n,
    203n,
    877n,
    4140n,
    21147n,
    115975n,
    678570n,
    4213597n,
    27644437n,
    190899322n,
    1382958545n,
    10480142147n,
    82864869804n,
    682076806159n,
    5832742205057n,
    51724158235372n,
    474869816156751n,
    4506715738447323n,
    44152005855084346n,
    445958869294805289n,
    4638590332229999353n,
    49631246523618756274n,
  ]) {
    yield n
  }
}
