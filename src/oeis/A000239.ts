// One-half of number of permutations of [n] with exactly one run of adjacent symbols differing by 1.
export default function* A000239(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    3n,
    8n,
    28n,
    143n,
    933n,
    7150n,
    62310n,
    607445n,
    6545935n,
    77232740n,
    989893248n,
    13692587323n,
    203271723033n,
    3223180454138n,
    54362625941818n,
    971708196867905n,
    18347779304380995n,
    364911199401630640n,
    7624625589633857940n,
    166977535317365068775n,
    3824547112283439914893n,
    91440772473772839055238n,
  ]) {
    yield n
  }
}
