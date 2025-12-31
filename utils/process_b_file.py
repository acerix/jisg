
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

exceptions = []
with open('utils/b000001.txt', 'r') as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith('#'): continue
        parts = line.split()
        if len(parts) < 2: continue
        
        n = int(parts[0])
        val = int(parts[1])
        
        if n == 0:
             exceptions.append(f"  [{n}n, {val}n],")
        elif not is_square_free(n):
             exceptions.append(f"  [{n}n, {val}n],")

print("const EXCEPTIONS = new Map<bigint, bigint>([")
print("\n".join(exceptions))
print("])")

