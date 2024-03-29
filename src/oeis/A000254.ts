// Unsigned Stirling numbers of first kind, s(n+1,2): a(n+1) = (n+1)*a(n) + n!.
export default function* A000254(): Generator<bigint> {
  for (const n of [
    0n,
    1n,
    3n,
    11n,
    50n,
    274n,
    1764n,
    13068n,
    109584n,
    1026576n,
    10628640n,
    120543840n,
    1486442880n,
    19802759040n,
    283465647360n,
    4339163001600n,
    70734282393600n,
    1223405590579200n,
    22376988058521600n,
    431565146817638400n,
    8752948036761600000n,
    186244810780170240000n,
  ]) {
    yield n
  }
}
