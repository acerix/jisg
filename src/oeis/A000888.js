// a(n) = (n+2)*Catalan(n) - 1
export default function* A000888() {
    for (const n of [1, 2, 12, 100, 980, 10584, 121968, 1472328, 18404100, 236390440, 3103161776, 41469525552, 562496897872, 7726605740000, 107289439704000, 1503840313184400, 21252802073091300, 302539888334593800, 4334635827016110000, 62464383654579522000, 904841214653480504400, ]) {
        yield n
    }
}
