// From von Staudt-Clausen representation of Bernoulli numbers: a(n) = Bernoulli(2n) + Sum_{(p-1)|2n} 1/p. 
export default function* A000146(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 1n, 1n, 1n, 2n, -6n, 56n, -528n, 6193n, -86579n, 1425518n, -27298230n, 601580875n, -15116315766n, 429614643062n, -13711655205087n, 488332318973594n, -19296579341940067n, 841693047573682616n, -40338071854059455412n, 2115074863808199160561n, -120866265222965259346026n, ]) {
    yield n
  }
}
