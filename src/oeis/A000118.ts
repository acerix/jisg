// Number of ways of writing n as a sum of 4 squares; also theta series of lattice Z^4.
export default function* A000118(): Generator<bigint> {
  for (const n of [1n, 8n, 24n, 32n, 24n, 48n, 96n, 64n, 24n, 104n, 144n, 96n, 96n, 112n, 192n, 192n, 24n, 144n, 312n, 160n, 144n, 256n, 288n, 192n, 96n, 248n, 336n, 320n, 192n, 240n, 576n, 256n, 24n, 384n, 432n, 384n, 312n, 304n, 480n, 448n, 144n, 336n, 768n, 352n, 288n, 624n, 576n, 384n, 96n, 456n, 744n, 576n, 336n, 432n, 960n, 576n, 192n, ]) {
    yield n
  }
}
