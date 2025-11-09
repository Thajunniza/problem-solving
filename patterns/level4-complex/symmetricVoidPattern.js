console.log("Symmetric Void Pattern");

/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a symmetric pattern where two mirrored triangles face each other,
 * creating a central hollow space (void) that expands until the middle row,
 * then shrinks again symmetrically.
 *
 * Example for n = 6:
 * ************
 * *****  *****
 * ****    ****
 * ***      ***
 * **        **
 * *          *
 * *          *
 * **        **
 * ***      ***
 * ****    ****
 * *****  *****
 * ************
 *
 * 🔹 Pattern Logic:
 * - Total columns = n * 2
 * - For the first n rows (top half): the gap increases
 * - For the last n rows (bottom half): the gap decreases
 * - We decide what to print based on the column index:
 *      If (j > n - i && j <= col - (n - i)) → print space
 *      Else → print '*'
 *
 * 🔹 Approach:
 * 1️. Compute total columns = 2 * n
 * 2️. Run outer loop (i) for 2n rows
 * 3️. For top half: increase gap
 * 4️. For bottom half: mirror using k = col - (i + 1)
 * 5️. Build each row and store in result[]
 *
 * 🔹 Complexity:
 * Time Complexity : O(n²)
 * Space Complexity: O(n²)
 */

/**
 *
 * @param {*} n
 * @returns {string[]} result
 */
function generateSymmetricVoidPattern(n) {
  let result = [];
  let col = n * 2;
  for (let i = 0; i < col; i++) {
    let line = "";
    if (i < n) {
      for (let j = 1; j <= col; j++) {
        line += j > n - i && j <= col - (n - i) ? " " : "*";
      }
    } else {
      let k = col - (i + 1);
      for (let j = 1; j <= col; j++) {
        line += j > n - k && j <= col - (n - k) ? " " : "*";
      }
    }
    result.push(line);
  }
  return result;
}

let pattern = generateSymmetricVoidPattern(6);
pattern.forEach((line) => console.log(line));

/**
 * Output
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
 */
