// Random integer
export default function* randint(min, max) {
    min = Math.ceil(min || 0)
    max = Math.floor(max || Number.MAX_SAFE_INTEGER)
    while (true) {
        yield Math.floor(Math.random() * (max - min + 1)) + min
    }
}