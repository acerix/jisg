// Number of invertible 2 X 2 matrices mod n.
export default function* A000252(): Generator<bigint> {
  for (const n of [1n, 6n, 48n, 96n, 480n, 288n, 2016n, 1536n, 3888n, 2880n, 13200n, 4608n, 26208n, 12096n, 23040n, 24576n, 78336n, 23328n, 123120n, 46080n, 96768n, 79200n, 267168n, 73728n, 300000n, 157248n, 314928n, 193536n, 682080n, 138240n, 892800n, 393216n, 633600n, 470016n, 967680n, 373248n, ]) {
    yield n
  }
}
