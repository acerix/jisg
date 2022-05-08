// Number of Boolean functions of n variables.
export default function* A000133(): Generator<bigint> {
  for (const n of [
    2n,
    5n,
    30n,
    2288n,
    67172352n,
    144115192303714304n,
    1329227995784915891206435945914040320n,
    226156424291633194186662080095093570364871077725232774230036394136943198208n,
  ]) {
    yield n
  }
}
