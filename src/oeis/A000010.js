// Euler totient of n
import {euler_phi} from '../utils'
export default function* A000010() {
    let n = 1
    while (true) {
        yield euler_phi(n)
        n++
    }
}