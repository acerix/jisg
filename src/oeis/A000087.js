// Number of unrooted planar maps.
export default function* A000087() {
    for (const n of [2, 1, 2, 4, 10, 37, 138, 628, 2972, 14903, 76994, 409594, 2222628, 12281570, 68864086, 391120036, 2246122574, 13025721601, 76194378042, 449155863868, 2666126033850, 15925105028685, 95664343622234, 577651490729530, ]) {
        yield n
    }
}
