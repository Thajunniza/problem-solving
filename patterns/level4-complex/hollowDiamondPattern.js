console.log("Hollow Diamond Pattern");

/**
 * Hollow Diamond Pattern (trimmed width, no trailing spaces)
 *
 * For n >= 1, prints 2n - 1 rows.
 * Top half rows have length (n + i - 1), bottom mirrors.
 * Stars at the left and right borders; interior is empty.
 *
 * Example (n = 5):
 *     *
 *    * *
 *   *   *
 *  *     *
 * *       *
 *  *     *
 *   *   *
 *    * *
 *     *
 *
 * Time:  O(n^2)
 * Space: O(n^2) if returning lines; O(1) extra if streaming
 */

/**
 * 
 * @param {*} n - no of rows
 * @param {*} ch - pattern by default '*'
 * @returns {string[]} result
 */
function generateHollowDiamondPattern(n, ch = '*') {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('n must be an integer >= 1');
  }

  const result = [];

  // Top half: i = 1..n
  for (let i = 1; i <= n; i++) {
    const totalCols = n + i - 1;        // row width grows by 1 each row
    const left = n - i + 1;             // 1-based index of left border
    const right = totalCols;            // right border at the end
    let line = '';

    for (let j = 1; j <= totalCols; j++) {
      line += (j === left || j === right) ? ch : ' ';
    }
    result.push(line);
  }

  // Bottom half: i = n-1..1 (mirror)
  for (let i = n - 1; i >= 1; i--) {
    const totalCols = n + i - 1;
    const left = n - i + 1;
    const right = totalCols;
    let line = '';

    for (let j = 1; j <= totalCols; j++) {
      line += (j === left || j === right) ? ch : ' ';
    }
    result.push(line);
  }

  return result;
}

// Demo
const pattern = generateHollowDiamondPattern(5);
pattern.forEach(line => console.log(line));

/**
 * Output n = 5
Hollow Diamond Pattern
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
 */
