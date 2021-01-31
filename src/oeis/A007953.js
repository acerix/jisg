// Digital sum of n
import {digit_sum} from '../utils'
export default function* A007953() {
    let n = 0
    while (true) {
        yield digit_sum(n)
        n++
    }
}
