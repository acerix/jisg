// Number of positive integers <= 2^n of form x^2 + 6 y^2.
export default function* A000077(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 4n, 8n, 13n, 24n, 42n, 76n, 140n, 257n, 483n, 907n, 1717n, 3272n, 6261n, 12027n, 23172n, 44769n, 86708n, 168245n, 327073n, 636849n, 1241720n, 2424290n, 4738450n, 9271396n, 18157630n, 35591729n, 69820804n, 137069245n, 269270791n, 529312776n, 1041093937n, 2048826229n, 4034062310n, ]) {
    yield n
  }
}
