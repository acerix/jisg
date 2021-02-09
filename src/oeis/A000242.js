// 3rd power of rooted tree enumerator; number of linear forests of 3 rooted trees.
export default function* A000242() {
    for (const n of [1, 3, 9, 25, 69, 186, 503, 1353, 3651, 9865, 26748, 72729, 198447, 543159, 1491402, 4107152, 11342826, 31408719, 87189987, 242603970, 676524372, 1890436117, 5292722721, 14845095153, 41708679697, 117372283086, 330795842217, ]) {
        yield n
    }
}
