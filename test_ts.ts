function getPrimes1Mod4(count: number): bigint[] {
    const primes: bigint[] = [];
    let num = 5n;
    while (primes.length < count) {
        let isPrime = true;
        for (let p = 2n; p * p <= num; p++) {
            if (num % p === 0n) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
        num += 4n;
    }
    return primes;
}

const P = getPrimes1Mod4(100);

function solve(n: bigint): bigint {
    if (n === 1n) return 0n;
    const target_B = 2n * n - 1n;
    let best_N: bigint | null = null;
    
    function dfs(prime_idx: number, current_N: bigint, current_B: bigint, max_b: bigint) {
        if (current_B >= target_B) {
            if (best_N === null || current_N < best_N) {
                best_N = current_N;
            }
            return;
        }
        
        let b = 1n;
        while (b <= max_b) {
            // Need a fast power function for bigint, but since b is usually small, a loop or ** is fine.
            let next_N = current_N * (P[prime_idx] ** b);
            if (best_N !== null && next_N >= best_N) {
                break;
            }
            dfs(prime_idx + 1, next_N, current_B * (b + 1n), b);
            b++;
        }
    }
    
    dfs(0, 1n, 1n, target_B); // max_b can be at most target_B
    return best_N!;
}

for(let i = 1n; i <= 32n; i++) {
    console.log(solve(i).toString());
}
