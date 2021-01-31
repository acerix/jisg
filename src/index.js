import A000004 from './oeis/A000004'
import A000012 from './oeis/A000012'
import A000027 from './oeis/A000027'
import A000035 from './oeis/A000035'
import A000040 from './oeis/A000040'
import A000043 from './oeis/A000043'
import A000045 from './oeis/A000045'
import A000079 from './oeis/A000079'
import A000217 from './oeis/A000217'
import A000290 from './oeis/A000290'
import A000330 from './oeis/A000330'
import A000668 from './oeis/A000668'
import A001223 from './oeis/A001223'
import A001462 from './oeis/A001462'
import A002024 from './oeis/A002024'
import A005408 from './oeis/A005408'
import A005843 from './oeis/A005843'
import A006530 from './oeis/A006530'
import A006753 from './oeis/A006753'
import A007953 from './oeis/A007953'
import A007954 from './oeis/A007954'
import A010051 from './oeis/A010051'
import A010054 from './oeis/A010054'
import A019506 from './oeis/A019506'
import A063737 from './oeis/A063737'

export default class JISG {
    A000004 = A000004;
    A000012 = A000012;
    A000027 = A000027;
    A000035 = A000035;
    A000040 = A000040;
    A000043 = A000043;
    A000045 = A000045;
    A000079 = A000079;
    A000217 = A000217;
    A000290 = A000290;
    A000330 = A000330;
    A000668 = A000668;
    A001223 = A001223;
    A001462 = A001462;
    A002024 = A002024;
    A005408 = A005408;
    A005843 = A005843;
    A006530 = A006530;
    A006753 = A006753;
    A007953 = A007953;
    A007954 = A007954;
    A010051 = A010051;
    A010054 = A010054;
    A019506 = A019506;
    A063737 = A063737;

    /*
        # Square pyramidal numbers
        def A000330():
            n = 0
        sum = 0
        while True:
            sum += n ** 2
        yield sum
        n += 1

        # Mersenne primes
        @cached_pure_generator
        def A000668():
            n = 2
        while True:
        if is_prime(n):
            x = 2 ** n - 1

        if is_prime(x):
            yield x

        n += 1

        # Prime gaps
        def A001223():
            primes = yield_prime()
        p = next(primes)

        for n in primes:
            yield n - p
        p = n

        # Golomb's sequence
        def A001462():
        for n in [1, 2, 2]:
        yield n

        q = deque([2])
        n = 3

        while True:
        for i in range(q[0]):
        yield n
        q.append(n)

        n += 1
        q.popleft()

        # n appears n times
        def A002024():
            n = 1
        while True:
        for x in range(n):
            yield n
        n += 1

        # The odd numbers
        def A005408():
            n = 1
        while True:
            yield n
        n += 2

        # The nonnegative even numbers
        def A005843():
            n = 0
        while True:
            yield n
        n += 2

        # Greatest prime factorization of n
        def A006530():
            yield 1
        n = 2
        while True:
            yield prime_factorization(n)[-1]
        n += 1

        # Smith numbers
        def A006753():
            n = 2
        while True:
        if not is_prime(n):
            dsum = digit_sum(n)

        fsum = 0
        for i in prime_factorization(n, True):
            fsum += digit_sum(i)

        if dsum == fsum:
            yield n

        n += 1

        # Digital sum of n
        def A007953():
            n = 0
        while True:
            yield digit_sum(n)
        n += 1

        # Product of decimal digits of n
        def A007954():
            n = 0
        while True:
            yield digit_product(n)
        n += 1

        # Characteristic function of primes
        def A010051():
            n = 1
        while True:
            yield 1 if is_prime(n) else 0
        n += 1

        # n is triangular
        def A010054():
            n = 0
        while True:
            yield 1
        for i in range(n):
            yield 0
        n += 1

        # Hoax numbers
        def A019506():
            n = 2
        while True:
        if not is_prime(n):
            dsum = digit_sum(n)

        fsum = 0
        for i in prime_factorization(n):
            fsum += digit_sum(i)

        if dsum == fsum:
            yield n

        n += 1

        # Digit sum of n equals the sum of its prime factors
        def A063737():
            n = 2
        while True:
        if digit_sum(n) == sum(prime_factorization(n, True)):
        yield n
        n += 1*/

}
