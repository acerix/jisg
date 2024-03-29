// Series-parallel numbers.
export default function* A000163(): Generator<bigint> {
  for (const n of [
    2n,
    8n,
    34n,
    136n,
    538n,
    2080n,
    7970n,
    30224n,
    113874n,
    426520n,
    1590338n,
    5906640n,
    21866794n,
    80725280n,
    297292610n,
    1092539736n,
    4007553922n,
    14675748416n,
    53663197698n,
    195962433328n,
    714734393378n,
    2603994002280n,
    9477643739746n,
    34463730424720n,
  ]) {
    yield n
  }
}
