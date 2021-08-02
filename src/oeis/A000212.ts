// a(n) = floor(n^2/3).
export default function* A000212(): Generator<bigint> {
  for (const n of [0n, 0n, 1n, 3n, 5n, 8n, 12n, 16n, 21n, 27n, 33n, 40n, 48n, 56n, 65n, 75n, 85n, 96n, 108n, 120n, 133n, 147n, 161n, 176n, 192n, 208n, 225n, 243n, 261n, 280n, 300n, 320n, 341n, 363n, 385n, 408n, 432n, 456n, 481n, 507n, 533n, 560n, 588n, 616n, 645n, 675n, 705n, 736n, 768n, 800n, 833n, 867n, 901n, 936n, ]) {
    yield n
  }
}
