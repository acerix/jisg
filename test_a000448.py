def primes_1_mod_4(limit):
    primes = []
    num = 5
    while len(primes) < limit:
        is_prime = True
        for p in range(2, int(num**0.5) + 1):
            if num % p == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
        num += 4
    return primes

P = primes_1_mod_4(20)

def min_N_for_B(B):
    # Returns minimum N such that product(b_i + 1) = B
    # where N = prod P_i^{b_i}
    # We can use DFS
    best = float('inf')
    
    def dfs(rem_B, prime_idx, current_N):
        nonlocal best
        if rem_B == 1:
            best = min(best, current_N)
            return
        
        # Try all factors of rem_B
        for i in range(2, rem_B + 1):
            if rem_B % i == 0:
                next_N = current_N * (P[prime_idx] ** (i - 1))
                if next_N < best:
                    dfs(rem_B // i, prime_idx + 1, next_N)
                    
    dfs(B, 0, 1)
    return best

def solve(n):
    if n == 1:
        return 0
    # We need ceil(B/2) >= n  =>  B >= 2n - 1
    # We can just search B from 2n-1 up to some reasonable limit
    best = float('inf')
    for B in range(2*n - 1, 2*n + 50): # search a bit further
        best = min(best, min_N_for_B(B))
    return best

print([solve(i) for i in range(1, 33)])
