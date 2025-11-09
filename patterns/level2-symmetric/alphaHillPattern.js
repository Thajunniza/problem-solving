console.log("Alpha Hill Pattern");

/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a symmetric pyramid (hill) pattern using alphabets,
 * where letters increase from 'A' to a peak and then decrease back to 'A'.
 *
 * Example for n = 6:
 *      A
 *     ABA
 *    ABCBA
 *   ABCDCBA
 *  ABCDEDCBA
 * ABCDEFEDCBA
 *
 * 🔹 Pattern Observation:
 * - Spaces decrease each row → (n - i - 1)
 * - Alphabets increase from 'A' to the row letter, then decrease back.
 * - We can handle both halves in a single loop using an increment/decrement flag.
 *
 * 🔹 Approach:
 * 1️⃣ Outer loop → controls rows (0 → n-1)
 * 2️⃣ Inner loop → runs (n + i) times to print spaces + letters
 * 3️⃣ If j < n - i - 1 → print space (for alignment)
 * 4️⃣ Else → print letters using String.fromCharCode(65 + num)
 *     - Increment `num` until midpoint
 *     - Then decrement after reaching the peak
 * 5️⃣ Push each line into result[].
 *
 * 🔹 Complexity:
 * Time Complexity : O(n²)
 * Space Complexity: O(n²)
 */

function generateAlphaHillPattern(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let line = "";
    let num = 0;

    for (let j = 0; j < n + i; j++) {
      if (j < n - i - 1) {
        line += " ";
      } else {
        line += String.fromCharCode(65 + num);
        if (j < n - 1) num++;
        else num--;
      }
    }

    result.push(line.trimEnd());
  }

  return result;
}

// Example usage
const pattern = generateAlphaHillPattern(6);
pattern.forEach((line) => console.log(line));

/**
 * ✅ Output:
 *      A
 *     ABA
 *    ABCBA
 *   ABCDCBA
 *  ABCDEDCBA
 * ABCDEFEDCBA
 */
