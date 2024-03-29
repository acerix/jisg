// Number of ways of folding a strip of n labeled stamps.
export default function* A000136(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    6n,
    16n,
    50n,
    144n,
    462n,
    1392n,
    4536n,
    14060n,
    46310n,
    146376n,
    485914n,
    1557892n,
    5202690n,
    16861984n,
    56579196n,
    184940388n,
    622945970n,
    2050228360n,
    6927964218n,
    22930109884n,
    77692142980n,
    258360586368n,
    877395996200n,
    2929432171328n,
    9968202968958n,
    33396290888520n,
    113837957337750n,
  ]) {
    yield n
  }
}
