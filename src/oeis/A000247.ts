// a(n) = 2^n - n - 2.
export default function* A000247(): Generator<bigint> {
  for (const n of [0n, 3n, 10n, 25n, 56n, 119n, 246n, 501n, 1012n, 2035n, 4082n, 8177n, 16368n, 32751n, 65518n, 131053n, 262124n, 524267n, 1048554n, 2097129n, 4194280n, 8388583n, 16777190n, 33554405n, 67108836n, 134217699n, 268435426n, 536870881n, 1073741792n, 2147483615n, ]) {
    yield n
  }
}
