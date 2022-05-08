// Nearest integer to modified Bessel function K_n(2).
export default function* A000167(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    0n,
    1n,
    2n,
    9n,
    49n,
    306n,
    2188n,
    17810n,
    162482n,
    1642635n,
    18231462n,
    220420179n,
    2883693795n,
    40592133316n,
    611765693528n,
    9828843229764n,
    167702100599524n,
    3028466654021205n,
    57708568527002410n,
    1157199837194069405n,
  ]) {
    yield n
  }
}
