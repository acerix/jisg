// Maximum m such that there are no two adjacent elements belonging to the same n-th power residue class modulo some prime p in the sequence 1n,2n,...,m (equivalently, there is no n-th power residue modulo p in the sequence 1/2n,2/3n,...,(m-1)/m).
export default function* A000236(): Generator<bigint> {
  for (const n of [3n, 8n, 20n, 44n, 80n, 343n, 288n, 608n, 1023n, 2848n, 4095n, 40959n, 16383n, 32768n, 11375n, 655360n, 262143n, 3670016n, 1048575n, 2097151n, ]) {
    yield n
  }
}
