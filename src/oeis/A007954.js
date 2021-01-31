// Product of decimal digits of n
import {digit_product} from '../utils'
export default function* A007954() {
    let n = 0
    while (true) {
        yield digit_product(n)
        n++
    }
}
