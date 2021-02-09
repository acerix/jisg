#!/usr/bin/env python

# Generates index.js from a range of sequences

# Remove this to actually run the script
raise Exception('Script is disabled')

end = 256
extras = [
    'A000290',
    'A000292',
    'A000330',
    'A000333',
    'A000400',
    'A000420',
    'A000444',
    'A000555',
    'A000578',
    'A000666',
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
index_file = open('../src/index.js', 'w')

for i in range(1, end):
    oeis_id = f'A{i:06}'
    index_file.write(f"import {oeis_id} from '../src/oeis/{oeis_id}'\n")


for oeis_id in extras:
    index_file.write(f"import {oeis_id} from '../src/oeis/{oeis_id}'\n")

index_file.write("import randint from '../src/extra/randint'\n")

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
