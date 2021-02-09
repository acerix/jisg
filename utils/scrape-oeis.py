#!/usr/bin/env python

# This loops through all OEIS's, scraping the description and beginning of the sequences from oeis.org
# and using it to write test cases and generator functions that return the sequences.
# It results in 1.2 GB of code of which many sequences are not super useful or interesting.
# So this was only run on the first 255 for now.

# Remove this to actually run the script
raise Exception('Script is disabled')

import requests
from lxml import html

session = requests.Session()
test_file = open('../tests/new.js', 'w')

# for i in range(1, 341300):
for i in range(1, 256):
    oeis_id = f'A{i:06}'
    filename = f'../src/oeis/{oeis_id}.js'
    try:
        file = open(filename, 'r')
        print(f'{oeis_id} already exists')
        # do nothing if the file already exists
    except IOError:
        print(oeis_id)
        page = session.get(f'https://oeis.org/{oeis_id}')
        tree = html.fromstring(page.content)
        description = tree.xpath('string(//html/body/center[2]/table/tr/td/center[2]/table/tr[3]/td/table/tr/td[3])').strip().splitlines()[0].strip()
        start_sample = tree.xpath('//html/body/center[2]/table/tr/td/center[2]/table/tr[4]/td/table/tr/td[2]/tt/text()')[0].strip()
        script = '''// {description}
export default function* {oeis_id}() {{
    for (const n of [{start_sample}, ]) {{
        yield n
    }}
}}
'''.format(
   oeis_id = oeis_id,
   description = description,
   start_sample = start_sample,
)
        print(script)
        file = open(filename, 'w')
        file.write(script)
        test_case = f"'{oeis_id}': [{start_sample}, ],\n"
        test_file.write(test_case)
        print()