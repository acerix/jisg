// Hilbert's Hamiltonian walk on N X N projected onto x axis: m(3)
export default function* A059252() {
    for (let t=0; true; t++) {
        const n = Math.ceil(Math.log2(t+1)/2)
        const s = [(n&1)===1, false]
        const y = 0
        for (let i=n-1; i!==-1; i--) {
            const x = 1<<(i<<1)
            const a = (t & (x<<1)) !== 0
            const b = (t & x) !== 0
            const d = a !== s[+!b]
            if (d !== b) y |= 1<<i
            s[0] = s[0] !== !(a||b)
            s[1] = s[1] !== (a&&b)
        }
        yield y
    }
}
