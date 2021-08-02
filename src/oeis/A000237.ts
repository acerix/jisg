// Number of mixed Husimi trees with n nodes; or rooted polygonal cacti with bridges.
export default function* A000237(): Generator<bigint> {
  for (const n of [0n, 1n, 1n, 3n, 8n, 26n, 84n, 297n, 1066n, 3976n, 15093n, 58426n, 229189n, 910127n, 3649165n, 14756491n, 60103220n, 246357081n, 1015406251n, 4205873378n, 17497745509n, 73084575666n, 306352303774n, 1288328048865n, 5433980577776n, 22982025183983n, ]) {
    yield n
  }
}
