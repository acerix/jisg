// Number of 3 X n Latin rectangles in which the first row is in order.
export default function* A000186() {
    for (const n of [1, 0, 0, 2, 24, 552, 21280, 1073760, 70299264, 5792853248, 587159944704, 71822743499520, 10435273503677440, 1776780700509416448, 350461958856515690496, 79284041282622163140608, 20392765404792755583221760, 5917934230798104348783083520, 1924427226324694427836833857536, ]) {
        yield n
    }
}
