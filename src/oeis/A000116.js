// Number of even sequences with period 2n (bisection of A000013).
export default function* A000116() {
    for (const n of [1, 2, 4, 8, 20, 56, 180, 596, 2068, 7316, 26272, 95420, 349716, 1290872, 4794088, 17896832, 67110932, 252648992, 954444608, 3616828364, 13743921632, 52357746896, 199911300472, 764877836468, 2932031358484, 11258999739560, 43303843861744, 166799988689300, ]) {
        yield n
    }
}
