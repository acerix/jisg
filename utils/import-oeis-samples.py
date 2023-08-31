#!/usr/bin/env python

# Download beginnings of sequences from oeis.org and add as samples for tests

# Prevent accidental running
raise Exception('Remove this line if you are sure you want to run this script.'); exit()

import sys
import requests
import json

START_ID = 1
END_ID = 2 # 400000?

session = requests.Session()

for i in range(START_ID, END_ID):
    oeis_id = f'A{str(i).zfill(6)}'
    print(oeis_id)
    response = session.get(f'https://oeis.org/search?q=id:{oeis_id}&fmt=json')
    data = json.loads(response.text)
    sample_file = open(f'tests/samples/{oeis_id}.csv', 'w')
    sample_file.write(data['results'][0]['data'])
    sample_file.close()
