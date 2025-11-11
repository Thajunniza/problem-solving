# 🌀 Recursion (Basics)

This folder covers **basic recursion problems** — the foundation for problem-solving with functions that call themselves.  
We’ll focus only on **simple math, string, and array recursion** before moving to advanced DSA topics later.

---

## 🎯 Goals
- Understand **what recursion is** and how it works internally (call stack)
- Learn to define **base case** and **recursive case**
- Write clean, correct recursive solutions for small problems
- Build confidence tracing recursive calls

---

## 🧠 Core Concepts
1. **Base Case** → the smallest input that stops recursion  
2. **Recursive Case** → calls the same function on a smaller subproblem  
3. **Progress Toward Base Case** → ensures recursion ends  
4. **Return and Combine** → combine results from smaller calls  

---

## 🧩 Beginner Problems

| # | Problem | Concept | Link |
|---|----------|----------|------|
| 1 | Print 1 to N / N to 1 | Understanding recursion flow | [print_1_to_n.py](print_1_to_n.py) |
| 2 | Factorial of N | Simple mathematical recursion | [factorial.py](factorial.py) |
| 3 | Power(x, n) | Multiply & shrink input recursively | [power_x_n.py](power_x_n.py) |

---

## 🧩 Problem 1 — Print 1 to N / N to 1 [print_1_to_n.py](print_1_to_n.py)

### 🎯 Goal
Understand how recursion flows by printing numbers in **increasing** and **decreasing** order — without using loops.


### 🧠 Concept
- **Base Case:** Stop when `n == 0`
- **Recursive Case:** Call the same function with `n - 1`
- **Key Idea:**  
  The **position of the print statement** (before or after recursion) decides whether the output is in ascending or descending order.


### 🧪 Example
**Input:** `n = 5`  
**Output (1 → N):** `1 2 3 4 5`  
**Output (N → 1):** `5 4 3 2 1`


### 📂 Files
| Version | Description | File Link |
|----------|--------------|-----------|
| Increasing Order | Prints numbers from 1 to N | [print_1_to_n.py](print_1_to_n.py) |
| Decreasing Order | Prints numbers from N to 1 | [print_n_to_1.py](print_n_to_1.py) |



### 🧭 Flow Visualization
#### For 1 → N
- Recursion goes **down** until `n == 0`
- Numbers are printed **on the way back up**
  
Output: `1 2 3 4 5`

#### For N → 1
- Each number is printed **before** making the recursive call  
- Recursion goes **down** from N to 0  

Output: `5 4 3 2 1`


### ⏱️ Time & Space Complexity

| Version | Time Complexity | Space Complexity | Reason |
|----------|------------------|------------------|---------|
| 1 → N | **O(N)** | **O(N)** | One recursive call per number until base case |
| N → 1 | **O(N)** | **O(N)** | Each call adds a new frame on the stack before returning |

---


## 🧩 Problem 2 — Factorial of N [factorial.py](factorial.py)

### 🎯 Goal
Learn how recursion can be used to calculate the **factorial of a number (n!)** by breaking the problem into smaller subproblems.


### 🧠 Concept
- **Base Case:** Factorial of 0 or 1 is 1.  
- **Recursive Case:** `factorial(n) = n * factorial(n - 1)`  
- Each recursive call computes a smaller factorial until it reaches the base case.

### 🧪 Example
**Input:** `n = 5`  
**Output:** `120`  
**Explanation:**  
`5! = 5 × 4 × 3 × 2 × 1 = 120`


### ⏱️ Time & Space Complexity

| Metric | Complexity | Explanation |
|---------|-------------|-------------|
| **Time Complexity** | **O(N)** | One recursive call for each number from n to 1 |
| **Space Complexity** | **O(N)** | Each recursive call adds a new frame on the call stack |


---

## 🧩 Problem 3 — Power(x, n) [power_x_n.py](power_x_n.py)

### 🎯 Goal
Learn how to use recursion to calculate the **power of a number** — i.e., compute `xⁿ` by repeatedly multiplying and reducing the problem size.


### 🧠 Concept
- **Base Case:** When `n == 0`, return `1` because any number raised to power 0 is 1.  
- **Recursive Case:** `power(x, n) = x × power(x, n - 1)`  
- The problem size decreases by 1 with each recursive call until reaching the base case.



### 🧪 Example
**Input:** `x = 2, n = 5`  
**Output:** `32`  
**Explanation:**  
`2⁵ = 2 × 2⁴ = 2 × 2 × 2³ = 2 × 2 × 2 × 2² = 2 × 2 × 2 × 2 × 2¹ = 32`




