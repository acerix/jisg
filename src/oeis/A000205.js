// Number of positive integers <= 2^n of form x^2 + 3 y^2.
export default function* A000205() {
    for (const n of [1, 1, 3, 4, 8, 14, 25, 45, 82, 151, 282, 531, 1003, 1907, 3645, 6993, 13456, 25978, 50248, 97446, 189291, 368338, 717804, 1400699, 2736534, 5352182, 10478044, 20531668, 40264582, 79022464, 155196838, 304997408, 599752463, 1180027022, 2322950591, 4575114295, ]) {
        yield n
    }
}
