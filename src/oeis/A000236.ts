// Maximum m such that there are no two adjacent elements belonging to the same n-th power residue class modulo some prime p in the sequence 1,2,...,m (equivalently, there is no n-th power residue modulo p in the sequence 1/2,2/3,...,(m-1)/m).
export default function* A000236(): Generator<number> {
  for (const n of [3, 8, 20, 44, 80, 343, 288, 608, 1023, 2848, 4095, 40959, 16383, 32768, 11375, 655360, 262143, 3670016, 1048575, 2097151, ]) {
    yield n
  }
}
