console.log("Increasing–Decreasing Number Sequence");

console.log("Increasing–Decreasing Number Sequence");

/**
 * 🧠 Solution Explanation:
 * Print a left-aligned numeric half-diamond:
 *  - Increase rows from 1..n (printing 1..i)
 *  - Then decrease from n-1..1 (printing 1..i)
 *
 * Example (n = 5):
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * 1234
 * 123
 * 12
 * 1
 *
 * Time Complexity : O(n²)
 * Space Complexity: O(n²)
 *
 * @param {number} n - Peak row length
 * @returns {string[]} lines - Array of lines for the pattern
 */
function generateIncreasingDecreasingSequence(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    result.push(line);
  }
  for (let i = n - 1; i > 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    result.push(line);
  }
  return result;
}

// Example usage
const pattern = generateIncreasingDecreasingSequence(5);
pattern.forEach((line) => console.log(line));

/**
 * ✅ Output (n = 5):
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * 1234
 * 123
 * 12
 * 1
 */
