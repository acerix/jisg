#!/usr/bin/env python

# Generate a placeholder function and test case for the given sequence id as defined on oeis.org

import sys

oeis_id = sys.argv[1]

print(oeis_id)

index_filename = './src/index.ts'

src_filename = f'./src/oeis/{oeis_id}.ts'

test_filename = f'./tests/oeis/{oeis_id}.ts'

print(index_filename, src_filename, test_filename)

print(f'https://oeis.org/search?q=id:{oeis_id}&fmt=json')
