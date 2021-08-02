// Central polygonal numbers (the Lazy Caterer's sequence): n(n+1)/2 + 1; or, maximal number of pieces formed when slicing a pancake with n cuts.
export default function* A000124(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 7n, 11n, 16n, 22n, 29n, 37n, 46n, 56n, 67n, 79n, 92n, 106n, 121n, 137n, 154n, 172n, 191n, 211n, 232n, 254n, 277n, 301n, 326n, 352n, 379n, 407n, 436n, 466n, 497n, 529n, 562n, 596n, 631n, 667n, 704n, 742n, 781n, 821n, 862n, 904n, 947n, 991n, 1036n, 1082n, 1129n, 1177n, 1226n, 1276n, 1327n, 1379n, ]) {
    yield n
  }
}
