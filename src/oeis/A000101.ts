// Record gaps between primes (upper end) (compare A002386, which gives lower ends of these gaps).
export default function* A000101(): Generator<number> {
  for (const n of [3, 5, 11, 29, 97, 127, 541, 907, 1151, 1361, 9587, 15727, 19661, 31469, 156007, 360749, 370373, 492227, 1349651, 1357333, 2010881, 4652507, 17051887, 20831533, 47326913, 122164969, 189695893, 191913031, 387096383, 436273291, 1294268779, ]) {
    yield n
  }
}
