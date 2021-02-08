#!/usr/bin/env python

end = 667
extras = [
    'A000668',
    'A000777',
    'A000888',
    'A000999',
    'A001223',
    'A001462',
    'A002024',
    'A003238',
    'A005408',
    'A005843',
    'A006530',
    'A006753',
    'A007953',
    'A007954',
    'A010051',
    'A010054',
    'A019506',
    'A063737',
    'A123456',
    'A134816',
]
index_file = open('./index.js', 'w')

for i in range(1, end):
    oeis_id = f'A{i:06}'
    index_file.write(f"import {oeis_id} from './oeis/{oeis_id}'\n")


for oeis_id in extras:
    index_file.write(f"import {oeis_id} from './oeis/{oeis_id}'\n")

index_file.write("import randint from './extra/randint'\n")

index_file.write("\n")
index_file.write("export default {\n")

for i in range(1, end):
    oeis_id = f'A{i:06}'
    index_file.write(f"\t{oeis_id},\n")

for oeis_id in extras:
    index_file.write(f"\t{oeis_id},\n")

index_file.write("\trandint,\n")

index_file.write("}\n")
index_file.write("\n")
