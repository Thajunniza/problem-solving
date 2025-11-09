# 🧩 Level 1 – Basic Patterns

These are simple patterns that help you master **nested loops**, **rows and columns control**, and **printing logic**.

---

## 🟩 [1. Solid Rectangle](solidRectangle.js)

### 🔹 What It Is
A pattern where all rows and columns are completely filled with `*`.

Example for `rows = 3` and `cols = 5`:

### Output

```
*****
*****
*****
```

### 🧮 Complexity Analysis
- **Time Complexity:** O(row × column)  
  > Because there are two nested loops — one for rows and one for columns.
- **Space Complexity:** O(row × column)  
  > Because we store the entire pattern in an array of strings.

  ---
  ## 🟨 [2. Right-Angled Triangle](rightAngledTriangle.js)

### 🔹 What It Is
A pattern where each row adds one more `*` than the previous.

Example for `rows = 4`:

### Output
```
*
**
***
****
*****
```

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Outer loop runs `n` times, inner loop runs `i` times for each row.
- **Space Complexity:** O(n²)  
  > Because we store the entire pattern (sum of 1 + 2 + ... + n stars).

  ---
  ## 🟥 [3. Right-Angled Numbered Pyramid](rightAngledNumberedPyramid.js)

### 🔹 What It Is
A pattern where each row displays numbers from `1` up to the current row number.

Example for `rows = 5`:

### Output
```
1
12
123
1234
12345
```

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Outer loop runs `n` times, and the inner loop runs `i` times for each row.
- **Space Complexity:** O(n²)  
  > Each row is stored as a growing string in the pattern array.

## 🟫 [4. Right-Angled Number Pyramid – II](rightAngledNumberPyramidII.js)

### 🔹 What It Is
A variation of the numbered right-angled pyramid where each row prints the **current row number**, repeated the same number of times as the row itself.

Example for `rows = 5`:

### Output
````
1
22
333
4444
55555
````

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Outer loop runs `n` times; inner loop runs `i` times for each row to print the row number repeatedly.
- **Space Complexity:** O(n²)  
  > Each row is stored as a string with a length equal to its row number.

## 🟦 [5. Inverted Right-Angled Pyramid](invertedRightAngledPyramid.js)

### 🔹 What It Is
A pattern that starts with the maximum number of `*` in the first row and decreases by one `*` in each subsequent row, forming an inverted right-angled shape.

Example for `rows = 5`:

### Output
````
*****
****
***
**
*

````

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Outer loop runs `n` times, and the inner loop runs decreasing iterations (`n`, `n-1`, ..., `1`), which still sums up to O(n²).
- **Space Complexity:** O(n²)  
  > Each row is stored as a string of decreasing length.

## 🟩 [6. Inverted Numbered Right-Angled Pyramid](invertedNumberedRightAngledPyramid.js)

### 🔹 What It Is
A pattern that starts with numbers from `1` up to the row count in the first row, and then decreases by one number in each subsequent row, forming an inverted right-angled shape.

Example for `rows = 5`:

### Output
````
12345
1234
123
12
1
````

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Outer loop runs `n` times, and the inner loop runs decreasing iterations (`n`, `n-1`, ..., `1`), totaling O(n²) operations.
- **Space Complexity:** O(n²)  
  > Each row is stored as a string, with the total number of digits across rows summing up to O(n²).

-----
## 🟨 [7. Increasing Continuous Number Triangle Pattern](increasingContinuousNumberTriangle.js)

### 🔹 What It Is
A number triangle where the sequence **continues across rows**,  
instead of restarting at 1 on each line.  
This helps you understand **how variables maintain state across nested loops**.

**Example for `rows = 4`:**
### Output
````
1
2 3
4 5 6
7 8 9 10
````

### 🧠 Logic Breakdown
- Outer loop → controls **rows**.
- Inner loop → prints `i + 1` numbers in each row.
- Maintain a **counter variable (`num`)** that starts from 1 and increases with every number printed.

---

### 💡 Step-by-Step Example (`rows = 5`)
| Row | Numbers Printed | Output |
|------|------------------|---------|
| 1 | 1 | `1` |
| 2 | 2, 3 | `2 3` |
| 3 | 4, 5, 6 | `4 5 6` |
| 4 | 7, 8, 9, 10 | `7 8 9 10` |
| 5 | 11, 12, 13, 14, 15 | `11 12 13 14 15` |

---

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Each row prints up to `i` numbers → total work is the sum of first n integers.
- **Space Complexity:** O(n²)  
  > Each row (string of numbers) is stored in an array.

---

### 🧩 Key Learnings
- Learn how to **carry variable state across loop iterations**.  
- Strengthens **row-column logic** and **sequence tracking**.  
- Foundational for number-based logic problems and DSA patterns.



## 🟨 [8. Increasing Number Triangle Pattern](increasingNumberTrianglePattern.js)

### 🔹 What It Is
A numeric triangle where each row starts from its **row number** and prints consecutive increasing numbers.  
Unlike the basic number triangle that always starts from `1`, here each row begins with its own index — making the pattern **progressively shifted**.

**Example for `rows = 5`:**

### Output
````
1
23
345
4567
56789
`````

### 🧠 Logic Breakdown
- Outer loop → controls **rows** (`i` from 1 → n)
- Inner loop → starts from **current row number** and prints up to `i + (i - 1)`
- Each row begins at its row index and increments the number sequentially.

---

### 💡 Step-by-Step Example (`rows = 5`)
| Row | Start | Count | Numbers Printed | Output |
|------|--------|--------|------------------|---------|
| 1 | 1 | 1 | 1 | `1` |
| 2 | 2 | 2 | 2, 3 | `23` |
| 3 | 3 | 3 | 3, 4, 5 | `345` |
| 4 | 4 | 4 | 4, 5, 6, 7 | `4567` |
| 5 | 5 | 5 | 5, 6, 7, 8, 9 | `56789` |

---

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Two nested loops — outer for rows, inner for printing sequential numbers.
- **Space Complexity:** O(n²)  
  > Each row string is stored in an array; total characters grow quadratically.

### 🧩 Key Learnings
- Builds understanding of **dynamic loop start points**.  
- Strengthens **control over nested loops** and arithmetic within them.  
- Helps bridge simple number patterns with **index-based logic** problems.


## 🟨 [9. Alphabet Triangle Pattern](alphabetTrianglePattern.js)

### 🔹 What It Is
A right-angled triangle pattern made up of **alphabets**, where each row prints letters sequentially from `'A'` up to the current row index.

**Example for `rows = 6`:**
### Output
````
A
A B
A B C
A B C D
A B C D E
A B C D E F
````

### 🧠 Logic Breakdown
- Outer loop → controls the number of rows.
- Inner loop → prints alphabets starting from `'A'` for each row.
- Use **ASCII values** to generate alphabets dynamically:
  - `'A'` = 65 → `String.fromCharCode(65 + j)`

---

### 💡 Step-by-Step Example (`rows = 4`)
| Row | Alphabets Printed | Output |
|------|------------------|---------|
| 1 | A | `A` |
| 2 | A, B | `A B` |
| 3 | A, B, C | `A B C` |
| 4 | A, B, C, D | `A B C D` |

---

### 🧮 Complexity Analysis
- **Time Complexity:** O(n²)  
  > Outer loop runs `n` times; inner loop prints `i` letters each time.
- **Space Complexity:** O(n²)  
  > Each row string (with letters) is stored in result[].

---

### 🧩 Key Learnings
- Introduces **character-based pattern logic** using ASCII.
- Strengthens **nested loop understanding** with different data types.
- Builds foundation for **alphabet pyramids and mirrored patterns**.
