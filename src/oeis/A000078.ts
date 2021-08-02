// Tetranacci numbers: a(n) = a(n-1) + a(n-2) + a(n-3) + a(n-4) for n >= 4 with a(0) = a(1) = a(2) = 0 and a(3) = 1.
export default function* A000078(): Generator<bigint> {
  for (const n of [0n, 0n, 0n, 1n, 1n, 2n, 4n, 8n, 15n, 29n, 56n, 108n, 208n, 401n, 773n, 1490n, 2872n, 5536n, 10671n, 20569n, 39648n, 76424n, 147312n, 283953n, 547337n, 1055026n, 2033628n, 3919944n, 7555935n, 14564533n, 28074040n, 54114452n, 104308960n, 201061985n, 387559437n, 747044834n, 1439975216n, 2775641472n, ]) {
    yield n
  }
}
