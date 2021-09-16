// Record gaps between primes (upper end) (compare A002386, which gives lower ends of these gaps).
export default function* A000101(): Generator<bigint> {
  for (const n of [3n, 5n, 11n, 29n, 97n, 127n, 541n, 907n, 1151n, 1361n, 9587n, 15727n, 19661n, 31469n, 156007n, 360749n, 370373n, 492227n, 1349651n, 1357333n, 2010881n, 4652507n, 17051887n, 20831533n, 47326913n, 122164969n, 189695893n, 191913031n, 387096383n, 436273291n, 1294268779n, ]) {
    yield n
  }
}
