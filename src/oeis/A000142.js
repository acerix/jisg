// Factorial numbers
import {factorial} from '../utils'
export default function* A000142() {
    let n = 0
    while (true) {
        yield factorial(n)
        n++
    }
}