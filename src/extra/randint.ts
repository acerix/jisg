// Random integer generator
export default function* randint(
  min?: number,
  max?: number,
): Generator<number> {
  min = Math.ceil(min || 0)
  max = Math.floor(max || Number.MAX_SAFE_INTEGER)
  for (;;) {
    yield Math.floor(Math.random() * (max - min + 1)) + min
  }
}
