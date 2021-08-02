// Number of equivalence classes of Boolean functions of n variables under action of AG(n,2).
export default function* A000214(): Generator<bigint> {
  for (const n of [3n, 5n, 10n, 32n, 382n, 15768919n, 16224999167506438730294n, 84575066435667906978109556031081616704183639810103015118n, ]) {
    yield n
  }
}
