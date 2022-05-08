// Gijswijt's sequence: a(1) = 1; for n>1, a(n) = largest integer k such that the word a(1)a(2)...a(n-1) is of the form xy^k for words x and y (where y has positive length), i.e., the maximal number of repeating blocks at the end of the sequence so far.
export default function* A090822(): Generator<bigint> {
  // initial block and glue sequences
  let b = [1n],
    s = [2n]
  yield 1n
  for (let n = 1; true; n++) {
    for (const r of b) {
      yield r
    }
    for (const r of s) {
      yield r
    }
    // b(n+1) = b(n) + b(n) + s(n)
    b = b.concat(b, s)
    // discover the glue sequence s(n) so that b(n) + b(n) + s(n) starts the sequence
    s = []
    for (;;) {
      let r = 0
      // search b(n) + b(n) + discovered part of s(n)
      const p = b.concat(b, s)
      // test blocks of increasing size
      for (let i = 1; i <= p.length / 2; i++) {
        // count how many times the block is repeated
        let c = 0n,
          j = p.length - i
        const block = p.slice(-i).toString()
        while (p.slice(j, j + i).toString() === block) {
          j -= i
          c++
        }
        r = Math.max(r, Number(c))
      }
      // s ends if there is a 1
      if (r === 1) {
        break
      }
      s.push(BigInt(r))
    }
  }
}
