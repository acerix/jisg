#!/usr/bin/env python

import sys
import json
import requests
import os

def main():
    if len(sys.argv) < 2:
        print("Usage: ./utils/add-from-oeis.py <OEIS_ID>")
        sys.exit(1)

    oeis_id = sys.argv[1]
    url = f"https://oeis.org/search?q=id:{oeis_id}&fmt=json"

    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        print(f"Error fetching data: {e}", file=sys.stderr)
        sys.exit(1)

    result = None
    
    # Handle API response which is a list of results
    if isinstance(data, list):
        if not data:
            print(f"No results found for {oeis_id}", file=sys.stderr)
            sys.exit(1)
        result = data[0]
    # Handle potential alternative format (e.g. wrapper object) just in case
    elif isinstance(data, dict) and 'results' in data:
        if not data['results']:
            print(f"No results found for {oeis_id}", file=sys.stderr)
            sys.exit(1)
        result = data['results'][0]
    else:
        print(f"Unexpected JSON structure for {oeis_id}", file=sys.stderr)
        sys.exit(1)

    sequence_data = result.get('data', '')
    name = result.get('name', '')

    # Create test sample file
    test_path = f"tests/samples/{oeis_id}.csv"
    os.makedirs(os.path.dirname(test_path), exist_ok=True)
    with open(test_path, 'w') as f:
        f.write(sequence_data)
    print(f"Created {test_path}", file=sys.stderr)

    # Check if implementation file already exists
    src_path = f"src/oeis/{oeis_id}.ts"
    if os.path.exists(src_path):
        print(f"Error: {src_path} already exists.", file=sys.stderr)
        sys.exit(1)

    os.makedirs(os.path.dirname(src_path), exist_ok=True)
    
    content = f"""// {name}
export default function* {oeis_id}(): Generator<bigint> {{
  for (;;) {{
    yield 0n
  }}
}}
"""
    with open(src_path, 'w') as f:
        f.write(content)
    print(f"Created {src_path}", file=sys.stderr)

    # Add entry to src/index.ts
    index_path = "src/index.ts"
    try:
        with open(index_path, 'r') as f:
            lines = f.readlines()
        
        new_export = f"export {{ default as {oeis_id} }} from './oeis/{oeis_id}'\n"
        
        if new_export not in lines:
            # Find the last export line to insert after, or just append
            last_export_idx = -1
            for i, line in enumerate(lines):
                if line.strip().startswith("export { default as A"):
                    last_export_idx = i
            
            if last_export_idx != -1:
                # Insert and sort exports
                export_lines = [line for line in lines if line.strip().startswith("export { default as A")]
                export_lines.append(new_export)
                export_lines.sort()
                
                # Reconstruct file content
                new_lines = []
                # Add non-export lines (imports, etc.)
                for line in lines:
                     if not line.strip().startswith("export { default as A"):
                         new_lines.append(line)
                
                # Find where to insert exports (after the initial block of imports/code)
                # Assuming exports are at the end, we append them back
                # But to be safe, let's just rewrite the whole file structure if it matches the pattern
                # A safer approach for this specific file structure:
                
                # 1. Separate header (imports, class jisg) and footer (exports)
                header = []
                exports = []
                for line in lines:
                    if line.strip().startswith("export { default as A"):
                        exports.append(line)
                    else:
                        header.append(line)
                
                exports.append(new_export)
                # extract ID for sorting: "export { default as A000001 } ..." -> "A000001"
                def get_id(line):
                    parts = line.split(' ')
                    for part in parts:
                        if part.startswith('A') and part[1].isdigit():
                            return part
                    return ""

                exports.sort(key=get_id)
                
                with open(index_path, 'w') as f:
                    f.writelines(header + exports)
                print(f"Added {oeis_id} to {index_path}", file=sys.stderr)
            else:
                 # Fallback if structure is different
                 with open(index_path, 'a') as f:
                     f.write(new_export)
                 print(f"Appended {oeis_id} to {index_path}", file=sys.stderr)
        else:
            print(f"{oeis_id} already in {index_path}", file=sys.stderr)

    except Exception as e:
        print(f"Error updating {index_path}: {e}", file=sys.stderr)

    # Print JSON for the AI agent
    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()