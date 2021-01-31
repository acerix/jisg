// Catalan numbers
import {factorial} from '../utils'
export default function* A000108() {
    let n = 0
    while (true) {
        yield factorial(2*n) / factorial(n+1) / factorial(n)
        n++
    }
}
