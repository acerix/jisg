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

P = primes_1_mod_4(100)

def solve(n):
    if n == 1: return 0
    target_B = 2 * n - 1
    best_N = float('inf')
    
    # We want to find a sequence of exponents b_0 >= b_1 >= ... >= b_k >= 1
    # such that prod(b_i + 1) >= target_B and prod(P_i^{b_i}) is minimized.
    
    # Initial bound: just use P_0^{target_B - 1}
    # Actually, a better bound is to greedily assign exponents.
    # We can just start with best_N = infinity and let it prune.
    
    def dfs(prime_idx, current_N, current_B, max_b):
        nonlocal best_N
        if current_B >= target_B:
            if current_N < best_N:
                best_N = current_N
            return
            
        # We need to increase current_B.
        # We can try all possible b for the current prime, up to max_b.
        b = 1
        while b <= max_b:
            next_N = current_N * (P[prime_idx] ** b)
            if next_N >= best_N:
                break
            dfs(prime_idx + 1, next_N, current_B * (b + 1), b)
            b += 1
            
    dfs(0, 1, 1, float('inf'))
    return best_N

print([solve(i) for i in range(1, 33)])
