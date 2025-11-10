
/**
 * Solution Explanation: Palindromic Number Pyramid
 *
 * Goal:
 * Print a centered palindromic number pyramid where each row `i` (1-indexed)
 * contains numbers decreasing from `i` to `1`, then increasing back to `i`.
 * The pyramid is center-aligned using left padding (spaces).
 *
 * Example for n = 5:
 *         1
 *       2 1 2
 *     3 2 1 2 3
 *   4 3 2 1 2 3 4
 * 5 4 3 2 1 2 3 4 5
 *
 * Logic:
 * - Total rows: `n`
 * - Each row has `n + i - 1` columns
 * - For columns `1` to `n`:
 *    - Print spaces until reaching the start of the pyramid
 *    - Then print decreasing numbers from `i` to `1`
 * - For columns `n+1` to `n+i-1`:
 *    - Print increasing numbers from `2` to `i`
 *
 * Complexity:
 * - Time Complexity : O(n^2)   // Each row has up to 2n - 1 characters
 * - Space Complexity: O(n^2)   // If collecting all rows; O(1) extra if printing directly
 *
 * Edge Cases:
 * - n = 1  → "1"
 * - n <= 0 → return empty array or throw error
 * - Non-integer input → validate and reject
 */


/**
 * @param {number} n
 * @return {string[]} result
 */
var generatePalindromicNumberPyramid = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let line = "";
    let cols = n + i - 1;
    for (let j = 1; j <= cols; j++) {
      //Logic for first half thst is j = n
      if (j <= n) {
        let startIndex = n - i + 1;
        let endIndex = n;
        line += j >= startIndex && j <= endIndex ? n - j + 1 : " ";
      }
      //Logic for second half thst is j = n
      else {
        line += j - n + 1;
      }
    }
    result.push(line);
  }
  return result;
};

let pattern = generatePalindromicNumberPyramid(5);
pattern.forEach((line) => console.log(line));
