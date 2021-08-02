// Number of positive integers <= 2^n of form 3 x^2 + 4 y^2.
export default function* A000049(): Generator<bigint> {
  for (const n of [0n, 0n, 2n, 3n, 5n, 9n, 16n, 29n, 53n, 98n, 181n, 341n, 640n, 1218n, 2321n, 4449n, 8546n, 16482n, 31845n, 61707n, 119760n, 232865n, 453511n, 884493n, 1727125n, 3376376n, 6607207n, 12941838n, 25371086n, 49776945n, 97730393n, 192009517n, 377473965n, 742511438n, 1461351029n, 2877568839n, 5668961811n, ]) {
    yield n
  }
}
