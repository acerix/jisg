// Number of n-bead binary necklaces with beads of 2 colors where the colors may be swapped but turning over is not allowed
export default function* A000013() {
    for (const n of [1, 1, 2, 2, 4, 4, 8, 10, 20, 30, 56, 94, 180, 316, 596, 1096, 2068, 3856, 7316, 13798, 26272, 49940, 95420, 182362, 349716, 671092, 1290872, 2485534, 4794088, 9256396, 17896832, 34636834, 67110932, 130150588, 252648992, 490853416, ]) {
        yield n
    }
}