
# 🧩 Level 4 – Hollow / Complex Patterns

These are **advanced symmetric patterns** that combine multiple visual rules —  
**mirroring**, **void creation**, and **shape fusion** (two or more geometric components in one).  

> 💡 These problems push you to apply mathematical reasoning, spacing logic, and nested-loop mastery together.

---

## 🧠 Understanding Complex Patterns

A pattern is “complex” when it:
- Uses **two axes of symmetry** (vertical + horizontal).  
- Includes **internal gaps** or **hollow sections**.  
- Blends multiple sub-patterns (e.g., pyramids + inverted pyramids).  
- Requires **conditional printing** inside nested loops.

---

## 🟦 [1. Symmetric Void Pattern](symmetricVoidPattern.js)

### 🔹 What It Is
A mirrored star pattern where two right triangles face each other, forming a **central hollow space** that expands and contracts symmetrically — creating a *void* in the middle.

**Example for `n = 6`:**

### Output
````
Symmetric Void Pattern
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************
````


### 🧠 Logic Breakdown
- For each row in the **top half (n → 1)**:
  - Print stars on the left and right wings.
  - Between them, print spaces equal to `2 × (n - i)`.
- Repeat the same structure **bottom-up (1 → n)**.


### 🧮 Complexity Analysis
- **Time Complexity:** O(n²) → nested iteration for rows × columns.  
- **Space Complexity:** O(n²) → storing pattern lines in an array.


### 🧩 Key Learnings
- Strengthens understanding of **two-sided symmetry**.
- Combines **incremental and decremental logic**.
- Builds foundation for **Hourglass** and **Butterfly Mirror** patterns.

---
## 🟦 [2. Symmetric Butterfly Pattern](symmetricButterflyPattern.js)

### 🔹 What It Is
A compact symmetric butterfly shape formed using `*`, where two mirrored wings expand toward the center and then contract symmetrically.

**Example for `n = 6`:**


### Output
Symmetric Butterfly Pattern
````
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
````

### 🧠 Logic Breakdown
- Pattern has **2 × n - 1** total rows.
- Each row consists of:
  - **Left wing:** `i` stars  
  - **Center gap:** `2 × (n - i)` spaces  
  - **Right wing:** `i` stars  
- For the **bottom half**, mirror the top half (decreasing order).


### 🧮 Complexity
- **Time Complexity:** O(n²) → nested iteration over rows and columns  
- **Space Complexity:** O(n²) → storing all pattern lines


### 🧩 Key Learnings
- Builds symmetry using mirrored left and right triangles.
- Reinforces center-gap control logic.
- Foundation for **hourglass** and **butterfly-void** variants.

---
## 🟧  [3. Hourglass Pattern](hourglassPattern.js)

###🔹 What It Is
The Hourglass Pattern is a vertically symmetric shape formed by combining an inverted pyramid on top and a normal pyramid below. It resembles an hourglass or sand timer.
Example for n = 5:

Output
```
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
````

## 🧠 Logic Breakdown
- The pattern has 2 × n - 1 total rows.
- It consists of two parts:
- Top half (inverted pyramid):
  Spaces = i
  Stars = 2 × (n - i) - 1
- Bottom half (normal pyramid):
  Spaces = n - i - 1
  Stars = 2 × i + 1
- Each row is built using a combination of spaces and stars to maintain symmetry.


### 🧮 Complexity
Time Complexity: O(n²) → nested loops for rows × columns
Space Complexity: O(n²) → storing all pattern lines (if returned as a string)

---
## 🧩 Summary

| # | Pattern | Concept Focus | Symmetry |
|---|---|---|---|
| 1️⃣ | Symmetric Void | Dual triangular wings + central void | Vertical |
| 2️⃣ | Symmetric Butterfly | Wing expansion/contraction + void | Vertical |
| 3️⃣ | Hourglass | Inverted + upright pyramids combined | Vertical + Horizontal |
| 4️⃣ | Hollow Diamond | Outline only with inner hollow | Vertical + Horizontal |

---

## ✨ Key Takeaways
- Complex patterns = multiple symmetry axes + conditional printing.  
- Building them improves spatial reasoning for matrix-based DSA problems.  
- They are perfect exercises for transitioning from simple loops to **logical algorithms**.

---

## ⚙️ How to Run
Run any pattern file directly with Node.js:
```bash
node level4-complex/symmetricButterflyPattern.js

