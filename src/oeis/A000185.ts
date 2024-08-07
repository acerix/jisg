// Coefficients of ménage hit polynomials.
export default function* A000185(): Generator<bigint> {
  for (const n of [
    2n,
    24n,
    140n,
    1232n,
    11268n,
    115056n,
    1284360n,
    15596208n,
    204710454n,
    2888897032n,
    43625578836n,
    702025263328n,
    11993721979336n,
    216822550325472n,
    4135337882588880n,
    82986434235959712n,
    1747976804189353962n,
    38559791049947726328n,
    889047923669760546140n,
  ]) {
    yield n
  }
}
