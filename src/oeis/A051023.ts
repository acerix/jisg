// Middle column of rule-30 1-D cellular automaton, from a lone 1 cell.
// https://arpitbhayani.me/blogs/rule-30

export default function* A051023(): Generator<bigint> {
  // let state = [1n]
  // let nextState = []
  
  // let n = 2n
  // for (;;) {
  //   if (!isPrime(n)) {
  //     const dsum = digitSum(n)
  //     let fsum = 0n
  //     for (const i of primeFactorization(n, true)) {
  //       fsum += digitSum(i)
  //     }
  //     if (dsum === fsum) {
  //       yield n
  //     }
  //   }
  //   n++
  // }

  // yield state[0]
  for (const n of [
    1n, 1n, 0n, 1n, 1n, 1n, 0n, 0n, 1n, 1n, 0n, 0n, 0n, 1n, 0n, 1n, 1n, 0n, 0n, 1n, 0n, 0n, 1n, 1n, 1n, 0n, 1n, 0n, 1n, 1n, 1n, 0n, 0n, 1n, 1n, 1n, 0n, 1n, 0n, 1n, 0n, 1n, 1n, 0n, 0n, 0n, 0n, 1n, 1n, 0n, 0n, 1n, 0n, 1n, 0n, 1n, 1n, 0n, 1n, 0n, 1n, 0n, 1n, 1n, 1n, 1n, 1n, 1n, 0n, 0n, 0n, 0n, 1n, 1n, 1n, 1n, 0n, 0n, 0n, 1n, 0n, 1n, 0n, 1n, 1n, 1n, 0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 1n, 0n, 1n, 1n, 0n, 0n, 0n, 1n 
  ]) {
    yield n
  }
}
