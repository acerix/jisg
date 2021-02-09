// Number of nonisomorphic minimal triangle graphs.
export default function* A000080() {
    for (const n of [1, 1, 2, 4, 9, 19, 48, 117, 307, 821, 2277, 6437, 18634, 54775, 163703, 495529, 1518706, 4703848, 14714754, 46444979, 147832051, 474229588, 1532565644, ]) {
        yield n
    }
}
