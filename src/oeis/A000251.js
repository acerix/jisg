// Number of trees of diameter 6.
export default function* A000251() {
    for (const n of [1, 3, 11, 29, 74, 167, 367, 755, 1515, 2931, 5551, 10263, 18677, 33409, 59024, 102984, 177915, 304458, 516939, 871180, 1458882, 2428548, 4021670, 6627515, 10874462, 17770474, 28932739, 46943967, 75925797, 122433291, 196879385, 315759282, 505168033, 806290796, 1284034606, 2040485004, 3235965074, 5121801962, 8091411114, 12759606939, 20085832527, 31565046053, 49523414558, 77575278933, 121329065354, 189475663960, 295465391518, 460087656595, 715436020515, 1110994054004, ]) {
        yield n
    }
}
