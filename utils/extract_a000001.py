import re
import sys

def is_square_free(n):
    if n <= 1: return True
    i = 2
    while i * i <= n:
        if n % i == 0:
            count = 0
            while n % i == 0:
                count += 1
                n //= i
            if count > 1:
                return False
        i += 1
    return True

with open('src/oeis/A000001.ts', 'r') as f:
    content = f.read()

# Try to find the array
match = re.search(r'[(.*?)](.*?)', content, re.DOTALL)
if not match:
    sys.stderr.write("Could not find array in src/oeis/A000001.ts\n")
    # Print a snippet of content to see what it looks like
    sys.stderr.write(content[:200] + "\n")
    exit(1)

content_str = match.group(1)
# Remove comments just in case
content_str = re.sub(r'//.*', '', content_str)

# Split by comma
items = [x.strip() for x in content_str.split(',')]
numbers = []
for x in items:
    if not x: continue
    val_str = x.replace('n', '').strip()
    if val_str.isdigit():
        numbers.append(int(val_str))

sys.stderr.write(f"Found {len(numbers)} numbers\n")

exceptions = []
for i, val in enumerate(numbers):
    if i == 0:
         exceptions.append(f"  [{i}n, {val}n],")
    elif not is_square_free(i):
        exceptions.append(f"  [{i}n, {val}n],")

print("const EXCEPTIONS = new Map<bigint, bigint>([")
print("\n".join(exceptions))
print("])")