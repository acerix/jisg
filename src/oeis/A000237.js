// Number of mixed Husimi trees with n nodes; or rooted polygonal cacti with bridges.
export default function* A000237() {
    for (const n of [0, 1, 1, 3, 8, 26, 84, 297, 1066, 3976, 15093, 58426, 229189, 910127, 3649165, 14756491, 60103220, 246357081, 1015406251, 4205873378, 17497745509, 73084575666, 306352303774, 1288328048865, 5433980577776, 22982025183983, ]) {
        yield n
    }
}
