console.log("Reverse Letter Triangle Pattern");

/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a reverse right-angled triangle made of alphabets.
 * Each row starts with 'A' and prints one fewer letter than the previous row.
 *
 * Example for n = 5:
 * A B C D E
 * A B C D
 * A B C
 * A B
 * A
 *
 * 🔹 Pattern Observation:
 * - Outer loop → controls rows (from n down to 1)
 * - Inner loop → prints alphabets from 'A' to ('A' + i - 1)
 * - Use String.fromCharCode(65 + j) where 65 = ASCII of 'A'
 *
 * 🔹 Approach:
 * 1️⃣ Outer loop: runs i = n → 1
 * 2️⃣ Inner loop: runs j = 0 → i - 1
 * 3️⃣ Convert j into alphabet → String.fromCharCode(65 + j)
 * 4️⃣ Append space after each alphabet for spacing
 * 5️⃣ Push trimmed line into result[]
 *
 * 🔹 Example Walkthrough (n = 3):
 * Row 1: A B C
 * Row 2: A B
 * Row 3: A
 *
 * 🔹 Complexity:
 * Time Complexity: O(n²)
 * Space Complexity: O(n²)
 */

/**
 * Reverse Letter Triangle Pattern
 * @param {number} n - no of rows
 * @returns {string[]} - result
 */
function generateReverseLetterTrianglePattern(n) {
  let result = [];
  for (let i = n; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(65 + j);
      line += " ";
    }
    result.push(line.trim());
  }
  return result;
}

const pattern = generateReverseLetterTrianglePattern(5);
pattern.forEach(line => console.log(line));

/**
 * Output
Reverse Letter Triangle Pattern
A B C D E
A B C D
A B C
A B
A 
 */
