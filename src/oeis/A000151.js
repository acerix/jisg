// Number of oriented rooted trees with n nodes. Also rooted trees with n nodes and 2-colored non-root nodes.
export default function* A000151() {
    for (const n of [1, 2, 7, 26, 107, 458, 2058, 9498, 44947, 216598, 1059952, 5251806, 26297238, 132856766, 676398395, 3466799104, 17873508798, 92630098886, 482292684506, 2521610175006, 13233573019372, 69687684810980, 368114512431638, 1950037285256658, 10357028326495097, 55140508518522726, 294219119815868952, 1573132563600386854, 8427354035116949486, 45226421721391554194, ]) {
        yield n
    }
}
