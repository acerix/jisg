// Number of unlabeled rooted trees with n nodes (or connected functions with a fixed point).
export default function* A000081() {
    for (const n of [0, 1, 1, 2, 4, 9, 20, 48, 115, 286, 719, 1842, 4766, 12486, 32973, 87811, 235381, 634847, 1721159, 4688676, 12826228, 35221832, 97055181, 268282855, 743724984, 2067174645, 5759636510, 16083734329, 45007066269, 126186554308, 354426847597, ]) {
        yield n
    }
}
