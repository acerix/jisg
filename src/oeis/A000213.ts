// Tribonacci numbers: a(n) = a(n-1) + a(n-2) + a(n-3) with a(0)=a(1)=a(2)=1.
export default function* A000213(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 3n, 5n, 9n, 17n, 31n, 57n, 105n, 193n, 355n, 653n, 1201n, 2209n, 4063n, 7473n, 13745n, 25281n, 46499n, 85525n, 157305n, 289329n, 532159n, 978793n, 1800281n, 3311233n, 6090307n, 11201821n, 20603361n, 37895489n, 69700671n, 128199521n, 235795681n, 433695873n, 797691075n, 1467182629n, ]) {
    yield n
  }
}
