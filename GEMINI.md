# JISG Project Guide for AI Agents

This document explains the structure and workflow of the `jisg` project, specifically designed to help AI agents understand how to add new OEIS sequence generators.

## Project Overview

`jisg` is a TypeScript library implementing integer sequences from the [On-Line Encyclopedia of Integer Sequences (OEIS)](http://oeis.org/). The sequences are implemented as JavaScript Generators yielding `bigint`.

## Folder Structure

*   `src/oeis/`: Contains the implementation files for each sequence (e.g., `A000001.ts`).
*   `src/index.ts`: The main entry point where all sequences are exported.
*   `tests/samples/`: CSV files containing expected values for testing (e.g., `A000001.csv`).
*   `tests/index.test.ts`: The main test runner that automatically validates all exported sequences against their sample files.

## Adding a New Sequence

To add a new sequence (e.g., `A000123`), follow these steps:

### 1. Create the Implementation File

Create a new file `src/oeis/A000123.ts`.

**Conventions:**
*   The function must be a `default` export.
*   The function must be a `function*` (generator).
*   The function name should match the OEIS ID (e.g., `A000123`).
*   It must yield `bigint` values (e.g., `1n`, not `1`).
*   It should return `Generator<bigint>`.

**Example (`src/oeis/A000002.ts`):**
```typescript
// Kolakoski sequence
export default function* A000002(): Generator<bigint> {
  yield 1n
  yield 2n
  yield 2n
  // ... implementation logic
}
```

### 2. Create the Test Sample

Create a new file `tests/samples/A000123.csv`.

**Format:**
*   A single line containing comma-separated integers.
*   These values represent the initial terms of the sequence starting from the first term.

**Example (`tests/samples/A000001.csv`):**
```
0,1,1,1,2,1,2,1,5,2,2,1,5,1,2,1,14,1,5,1,5,2,2,1,15,2,2,5,4,1,4,1,51
```

### 3. Register the Sequence

Add the export to `src/index.ts`. Keep the list sorted numerically.

```typescript
export { default as A000123 } from './oeis/A000123'
```

### 4. Verify

Run the tests to ensure the new sequence is correct.

```bash
yarn test -t A000123
```

If the test times out (default 10s), reduce the number of items in the `.csv` sample file until it passes within the limit.

## Key Constraints

*   **Algorithmic Generation:** Sequences must be generated algorithmically if possible. Never hard-code sequences if a known algorithm exists, regardless of complexity or runtime.
*   **Educational Value:** Implementations should be simple and concise, serving as a learning tool to demonstrate the algorithm.
*   **Infinite Generation:** Generators should aim to run forever, yielding as many terms as possible.
*   **BigInt:** Always use `bigint` for calculations and yielded values to support large integers.
*   **Performance:** Generators should be efficient, minimizing memory footprint and time complexity. If a sequence is computationally expensive, ensure the test sample is small enough to pass quickly.
*   **Dependencies:** Avoid adding new runtime dependencies. Use standard library features.

## Automated Scaffolding

To quickly add a new sequence, use the helper script `utils/add-from-oeis.py`. 

### Usage

```bash
./utils/add-from-oeis.py <OEIS_ID>
```

**Example:**
```bash
./utils/add-from-oeis.py A000123
```

### What the script does:
1.  **Fetches Data:** Retrieves the sequence JSON from OEIS.
2.  **Validates:** Fails if `src/oeis/<OEIS_ID>.ts` already exists to prevent accidental overwriting.
3.  **Creates Sample:** Writes `tests/samples/<OEIS_ID>.csv` using the `data` field from the JSON.
4.  **Scaffolds Implementation:** Creates a placeholder `src/oeis/<OEIS_ID>.ts` with the sequence name as a comment.
5.  **Registers Sequence:** Automatically adds the export to `src/index.ts` and sorts the exports numerically.
6.  **Outputs Information:** Prints the full JSON to the console for you to analyze.

### Interpreting the Output

The script prints the JSON object for the sequence. Key fields to look for:

*   **`name`**: The description of the sequence.
*   **`data`**: The sequence values (already saved to the CSV sample file).
*   **`formula`**: Recurrence relations or closed-form expressions.
*   **`program`**: Implementation examples in other languages (PARI/GP, Mathematica, Python, etc.).
*   **`comment`**: Mathematical properties and context.

### Implementation Tips

1.  **Check `src/utils.ts`:** Look for existing utility functions (like `isPrime`, `gcd`, etc.) before implementing your own.
2.  **Reuse Existing Generators:** If a sequence depends on another OEIS sequence (e.g., `a(n) = A000045(n) - 1`), import the generator from its file instead of reimplementing it.
    ```typescript
    import A000045 from './A000045'
    // ...
    const g = A000045()
    const val = g.next().value
    ```
3.  **Recursive Generators:** Some sequences are easier to implement by calling themselves (see `src/oeis/A000002.ts` for an example).
4.  **Memory Management:** If a sequence depends on all previous terms, store them in an array within the generator.
5.  **BigInt Precision:** Remember that standard `Math` functions (like `Math.sqrt`) work with `number` (floats) and may lose precision for large `bigint` values. Use integer-based algorithms where possible.
