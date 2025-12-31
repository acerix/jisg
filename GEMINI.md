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

*   **BigInt:** Always use `bigint` for calculations and yielded values to support large integers.
*   **Performance:** Generators should be efficient. If a sequence is computationally expensive, ensure the test sample is small enough to pass quickly.
*   **Dependencies:** Avoid adding new runtime dependencies. Use standard library features.

## Automated Scaffolding

To quickly add a new sequence, use the helper script `utils/add-from-oeis.py`. This script fetches data from OEIS, creates the sample file, creates a placeholder implementation, and outputs the OEIS data (including formulas and pseudocode) for you to analyze.

### Usage

```bash
./utils/add-from-oeis.py <OEIS_ID>
```

**Example:**

```bash
./utils/add-from-oeis.py A000123
```

### Interpreting the Output

The script prints the JSON object for the sequence. Key fields to look for:

*   **`name`**: The description of the sequence.
*   **`data`**: The sequence values (already saved to the CSV sample file).
*   **`formula`**: Formulas that can often be directly translated to code.
*   **`program`**: Code in other languages (PARI, Mathematica, etc.) which is very helpful for understanding the algorithm.
*   **`comment`**: Additional context and properties.

After running the script:
1.  Read the JSON output to understand the sequence logic.
2.  Edit `src/oeis/<OEIS_ID>.ts` to implement the logic.
3.  Register the sequence in `src/index.ts`.
4.  Run tests.
