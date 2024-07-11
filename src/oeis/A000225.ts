// a(n) = 2^n - 1. (Sometimes called Mersenne numbers, although that name is usually reserved for A001348.)
export default function* A000225(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield 2n ** n - 1n
  }
}

//   for (const n of [
//     0n,
//     1n,
//     3n,
//     7n,
//     15n,
//     31n,
//     63n,
//     127n,
//     255n,
//     511n,
//     1023n,
//     2047n,
//     4095n,
//     8191n,
//     16383n,
//     32767n,
//     65535n,
//     131071n,
//     262143n,
//     524287n,
//     1048575n,
//     2097151n,
//     4194303n,
//     8388607n,
//     16777215n,
//     33554431n,
//     67108863n,
//     134217727n,
//     268435455n,
//     536870911n,
//     1073741823n,
//     2147483647n,
//     4294967295n,
//     8589934591n
//   ]) {
//     yield n
//   }
// }
