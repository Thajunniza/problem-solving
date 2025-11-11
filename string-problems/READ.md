# 🟨 Phase 4: String Problems

### 🎯 Goal
Master **string manipulation and logic-building** —
Learn slicing, traversal, comparison, and regex-based validation.

---

## 📘 Key Concepts

- String immutability & slicing (`[::-1]`, `str[:n]`)
- Built-in methods: `lower()`, `upper()`, `replace()`, `split()`, `join()`
- ASCII / Unicode (`ord()`, `chr()`)
- Character frequency & dictionary usage
- Palindrome, Anagram, and Substring logic
- Regex patterns for text validation

---

## 🧠 Core Practice Problems

| # | Problem | Description | Concept | File | LeetCode Link |
|---|----------|--------------|----------|------|----------------|
| 1 | **Reverse String** | Reverse a given string. | Slicing / Loop | [ReverseString.py](./ReverseString.py) | [LeetCode #344](https://leetcode.com/problems/reverse-string/) |
| 2 | **Valid Palindrome** | Check if string reads same backward. | Two-pointer logic | [PalindromeCheck.py](./PalindromeCheck.py) | [LeetCode #125](https://leetcode.com/problems/valid-palindrome/) |
| 3 | **Count Vowels & Consonants** | Count total vowels and consonants. | Character filter | [CountVowels.py](./CountVowels.py) | — |
| 4 | **Remove Spaces / Special Characters** | Keep only alphabets and digits. | String filtering | [RemoveSpecialChars.py](./RemoveSpecialChars.py) | — |
| 5 | **Character Frequency** | Count how many times each char appears. | Dictionary / Counter | [CharFrequency.py](./CharFrequency.py) | — |
| 6 | **Check Anagram** | Check if two strings are anagrams. | Sorting / HashMap | [CheckAnagram.py](./CheckAnagram.py) | [LeetCode #242](https://leetcode.com/problems/valid-anagram/) |
| 7 | **String Compression (RLE)** | Compress string: `aabb` → `a2b2`. | Loop + Counting | [StringCompression.py](./StringCompression.py) | [LeetCode #443](https://leetcode.com/problems/string-compression/) |
| 8 | **First Unique Character** | Find first non-repeating char. | HashMap + Iteration | [FirstUniqueChar.py](./FirstUniqueChar.py) | [LeetCode #387](https://leetcode.com/problems/first-unique-character-in-a-string/) |
| 9 | **Reverse Words in Sentence** | Reverse the order of words. | Split / Join | [ReverseWords.py](./ReverseWords.py) | [LeetCode #151](https://leetcode.com/problems/reverse-words-in-a-string/) |
| 10 | **Rotation Check** | Check if one string is rotation of another. | Concatenation Logic | [RotationCheck.py](./RotationCheck.py) | — |
| 11 | **Minimum Window Substring** | Find smallest substring with all chars. | Sliding Window | [MinWindowSubstring.py](./MinWindowSubstring.py) | [LeetCode #76](https://leetcode.com/problems/minimum-window-substring/) |
| 12 | **Longest Substring Without Repeat** | Find max substring with no duplicates. | Sliding Window | [LongestSubstring.py](./LongestSubstring.py) | [LeetCode #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |

---

## 💡 Pro Tips

- Always normalize strings (`lower()`, `strip()`) before comparison.  
- Use `collections.Counter` for frequency-based logic.  
- Avoid string concatenation in loops → use list and `' '.join()`.  
- Practice regex for data extraction (emails, digits, etc.).  
- Understand time complexity: `O(n)` for traversal-based, `O(n log n)` for sorting-based.

---

## ✅ Outcome
By completing this phase, you’ll:
- Build strong control over text logic and character operations.  
- Recognize recurring patterns like *two-pointer* and *hashmap*.  
- Be interview-ready for FAANG-level string and pattern questions.  

---

## 🧩 Problem 1 — Reverse a String [ReverseString.py](ReverseString.py)

### 🎯 Goal
Learn how to **reverse a string** using slicing, iteration, or recursion — a common foundational problem that tests understanding of string indexing and Python’s immutability.

---

### 🧠 Concept
- Strings in Python are **immutable**, meaning they cannot be modified directly.
- Reversal can be done in three ways:
  1. **Slicing:** `s[::-1]`
  2. **Loop-based approach:** Iterate backward and build a new string.
  3. **Recursion:** Reverse the substring and append the first character at the end.

---

### 🧪 Example
**Input:**  
`s = "hello"`

**Output:**  
`"olleh"`

**Explanation:**  
Each character from the end of the string is appended to the front, producing the reversed order.

---

### ⏱️ Time & Space Complexity

| Metric | Complexity | Explanation |
|---------|-------------|-------------|
| **Time Complexity** | **O(N)** | Each character is visited once |
| **Space Complexity** | **O(N)** | New reversed string is created |

---

### 💡 Variations
- Reverse **each word** instead of the full string.
- Reverse using **recursion**.
- Reverse without using built-in slicing (`[::-1]`).

---

### 🔗 Related LeetCode Problem
- [LeetCode #344 – Reverse String](https://leetcode.com/problems/reverse-string/)
