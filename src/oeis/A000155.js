// Nearest integer to modified Bessel function K_n(1).
export default function* A000155() {
    for (const n of [0, 1, 2, 7, 44, 361, 3654, 44207, 622552, 10005041, 180713290, 3624270839, 79914671748, 1921576392793, 50040900884366, 1403066801155039, 42142044935535536, 1349948504738292193, 45940391206037470098, ]) {
        yield n
    }
}
