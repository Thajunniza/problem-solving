console.log("Reverse Alphabet Sequence Pattern");

/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a left-aligned triangle pattern where each row starts
 * from a decreasing alphabet (from 'F' upwards) and continues
 * sequentially until 'F'.
 *
 * Example for n = 6:
 * F
 * E F
 * D E F
 * C D E F
 * B C D E F
 * A B C D E F
 *
 * 🔹 Pattern Observation:
 * - Outer loop (i): runs from n → 1 (decreasing)
 * - Inner loop (j): runs from i → n (increasing)
 * - Letter printed = String.fromCharCode(64 + j)
 * - Add a space between each letter for readability.
 *
 * 🔹 Approach:
 * 1️. Start from row = n (outer loop)
 * 2️. For each row, print characters from ASCII(64 + i) to ASCII(64 + n)
 * 3️. Append to result[] and print.
 *
 * 🔹 Complexity:
 * Time Complexity : O(n²)
 * Space Complexity: O(n²)
 */


/**
 * @param {number} n - no of rows
 * @returns {string[]} result
 */
function generateReverseAlphabetSequencePattern(n) {
  let result = [];
  for (i = n; i > 0; i--) {
    let line = "";
    for (j = i; j <= n; j++) {
      line += String.fromCharCode(64 + j);
      line += " ";
    }
    result.push(line);
  }
  return result;
}

const pattern = generateReverseAlphabetSequencePattern(5);
pattern.forEach((line) => console.log(line));



/**
 * Output
F
E F
D E F
C D E F
B C D E F
A B C D E F
 */
