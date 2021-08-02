// Number of n-node rooted trees of height 3.
export default function* A000235(): Generator<bigint> {
  for (const n of [0n, 0n, 0n, 1n, 3n, 8n, 18n, 38n, 76n, 147n, 277n, 509n, 924n, 1648n, 2912n, 5088n, 8823n, 15170n, 25935n, 44042n, 74427n, 125112n, 209411n, 348960n, 579326n, 958077n, 1579098n, 2593903n, 4247768n, 6935070n, 11290627n, 18330973n, 29684082n, 47946852n, 77258764n, 124198083n, ]) {
    yield n
  }
}
