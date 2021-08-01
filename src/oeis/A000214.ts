// Number of equivalence classes of Boolean functions of n variables under action of AG(n,2).
export default function* A000214(): Generator<number> {
  for (const n of [3, 5, 10, 32, 382, 15768919, 16224999167506438730294, 84575066435667906978109556031081616704183639810103015118, ]) {
    yield n
  }
}
