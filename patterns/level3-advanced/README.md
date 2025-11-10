---
## 🟥 [Level 3 – Advanced Number Patterns](./level3-advanced/README.md)

> A collection of mathematically rich patterns that go beyond basic loops and symmetry.  
> These patterns involve **combinatorics**, **centered alignment**, and **numeric mirroring**, helping you build intuition for **dynamic programming**, **recursion**, and **mathematical logic**.

---

### 🧭 Pattern List

| # | Pattern Name | Concept Focus | Symmetry Type |
|---|---------------|------------------------|------------------|
| 1️⃣ | Pascal’s Triangle | Binomial coefficients & centered alignment | Vertical |
| 2️⃣ | Centered Number Pyramid | Repetition-based numeric pyramid (1, 22, 333...) | Vertical |
| 3️⃣ | Palindromic Number Pyramid | Numbers mirror around the center (e.g., 1 121 12321) | Vertical |
| 4️⃣ | Increasing–Decreasing Sequence | Expanding + shrinking numeric series | Horizontal |

---

### 🧩 Key Learnings
- Apply **mathematical formulas** inside loops (e.g., `nCr`, palindromes).
- Practice **center alignment** and **number formatting**.
- Strengthen understanding of **numeric symmetry** and **pattern growth**.
- Build a bridge from visual patterns to **algorithmic logic**.

---

### ⚙️ How to Run
You can execute any pattern file directly using Node.js:

```bash
node level3-advanced/pascalsTriangle.js


---
## 🟥 [1. Pascal's Triangle] (pascalsTriangle.js)

### 🔹 What It Is  
**Pascal’s Triangle** is a mathematical pattern where each number is the sum of the two numbers directly above it.  
It forms a centered triangle of numbers, often used in combinatorics (binomial coefficients).


## Output
````
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
`````

### 🧠 Logic Breakdown
- **Total rows**: `n`
- Each row `i` contains `i` numbers.
- Each number at position `j` in row `i` is computed as:
  - `C(i, j) = i! / (j! * (i - j)!)` → binomial coefficient
- You can compute values iteratively using:
  - `val = val * (i - j) / (j + 1)` to avoid factorials
- **Center alignment**: Add leading spaces to align the triangle.


### 🧮 Complexity
- **Time Complexity:** `O(n²)` → nested loops for rows × columns  
- **Space Complexity:**  
  - `O(n²)` if storing all values  
  - `O(1)` extra if printing directly

----
## 🟥 [2. Centered Number Pyramid]  centeredNumberPyramid.js

### 🔹 What It Is  
The **Centered Number Pyramid** is a vertically symmetric pattern where each row contains repeated numbers equal to the row index.  
It is center-aligned and grows in width as the row number increases.

**Example for `n = 5`:**

### Output
````
    1
   2 2
  3 3 3
 4 4 4 4
5 5 5 5 5
`````
### 🧠 Logic Breakdown
- **Total rows**: `n`
- For each row `i` from `1` to `n`:
  - **Outer spaces** = `n - i`
  - **Numbers to print** = `i`
  - Each number printed is `i`, repeated `i` times with spaces
- Each row is built as:  
  `" ".repeat(n - i) + (i + ' ').repeat(i).trim()`

---

### 🧮 Complexity
- **Time Complexity:** `O(n²)` → `n` rows × up to `n` characters per row  
- **Space Complexity:**  
  - `O(n²)` if storing all lines  
  - `O(1)` extra if printing directly

----
## 🟥 [3. Palindromic Number Pyramid]  palindromicNumberPyramid.js

### 🔹 What It Is
The Palindromic Number Pyramid is a symmetric number pattern where each row forms a palindromic sequence.
It grows in both height and width, with numbers increasing to the row index and then decreasing back to 1.
Example for n = 5:

### Output
````
        1
      2 1 2
    3 2 1 2 3
  4 3 2 1 2 3 4
5 4 3 2 1 2 3 4 5
````

### 🧮 Complexity

Time Complexity: O(n²) → Each row prints up to 2n - 1 numbers
Space Complexity:

O(n²) if storing all lines
O(1) extra if printing directly
