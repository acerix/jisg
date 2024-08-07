// Number of unrooted planar maps.
export default function* A000087(): Generator<bigint> {
  for (const n of [
    2n,
    1n,
    2n,
    4n,
    10n,
    37n,
    138n,
    628n,
    2972n,
    14903n,
    76994n,
    409594n,
    2222628n,
    12281570n,
    68864086n,
    391120036n,
    2246122574n,
    13025721601n,
    76194378042n,
    449155863868n,
    2666126033850n,
    15925105028685n,
    95664343622234n,
    577651490729530n,
  ]) {
    yield n
  }
}
