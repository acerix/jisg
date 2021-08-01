// Generalized Euler numbers, c(5,n).
export default function* A000187(): Generator<number> {
  for (const n of [2, 30, 3522, 1066590, 604935042, 551609685150, 737740947722562, 1360427147514751710, 3308161927353377294082, 10256718523496425979562270, 39490468691102039103925777602, 184856411587530526077816051412830, ]) {
    yield n
  }
}
