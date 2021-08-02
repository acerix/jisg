// Tribonacci numbers: a(n) = a(n-1) + a(n-2) + a(n-3) for n >= 3 with a(0) = a(1) = 0 and a(2) = 1.
export default function* A000073(): Generator<bigint> {
  for (const n of [0n, 0n, 1n, 1n, 2n, 4n, 7n, 13n, 24n, 44n, 81n, 149n, 274n, 504n, 927n, 1705n, 3136n, 5768n, 10609n, 19513n, 35890n, 66012n, 121415n, 223317n, 410744n, 755476n, 1389537n, 2555757n, 4700770n, 8646064n, 15902591n, 29249425n, 53798080n, 98950096n, 181997601n, 334745777n, 615693474n, 1132436852n, ]) {
    yield n
  }
}
