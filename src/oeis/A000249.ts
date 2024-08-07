// Nearest integer to modified Bessel function K_n(5).
export default function* A000249(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    1n,
    3n,
    10n,
    42n,
    193n,
    966n,
    5215n,
    30170n,
    186234n,
    1222065n,
    8496274n,
    62395234n,
    482700052n,
    3923995651n,
    33444263516n,
    298233514595n,
    2777192597789n,
    26959282453367n,
    272370017131462n,
    2859607460620573n,
    31156130591833647n,
    351808270089157421n,
  ]) {
    yield n
  }
}
