#!/usr/bin/env python

# Generates main.ts from a range of sequences

# raise Exception('Script is disabled')

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
    'A005150',
    'A005408',
    'A005843',
    'A006530',
    'A006753',
    'A007953',
    'A007954',
    'A010051',
    'A010054',
    'A019506',
    'A059252',
    'A063737',
    'A090822',
    'A123456',
    'A134816'
]
index_file = open('src/main.ts', 'w')

for i in range(1, end):
    oeis_id = f'A{i:06}'
    index_file.write(f"export {{default as {oeis_id}}} from './oeis/{oeis_id}'\n")


for oeis_id in extras:
    index_file.write(f"export {{default as {oeis_id}}} from './oeis/{oeis_id}'\n")

index_file.write("export {default as randint} from './extra/randint'\n")

index_file.write("\n")

index_file.write("export default {}\n")

index_file.write("\n")
