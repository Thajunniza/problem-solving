console.log("Increasing  Number Triangle");

/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a right-angled triangle of numbers where each row starts
 * from its row index and prints consecutive increasing numbers.
 *
 * Example for n = 5:
 * 1
 * 23
 * 345
 * 4567
 * 56789
 *
 *  Pattern Observation:
 * - The outer loop controls the number of rows (from 1 to n).
 * - Each row prints 'i' numbers (same as the row number).
 * - The first number in each row is equal to the current row number.
 * - Each subsequent number increases by 1 → achieved by (i + j).
 *
 *  Approach:
 * 1. Start a loop for rows (i = 1 → n)
 * 2. For each row, start an inner loop (j = 0 → i - 1)
 * 3️. Print (i + j) → gives consecutive numbers starting from row number.
 * 4️. Push each completed line into result[].
 *
 * Example Walkthrough:
 * i = 1 → j: 0 → line = "1"
 * i = 2 → j: 0,1 → line = "23"
 * i = 3 → j: 0,1,2 → line = "345"
 * ...and so on.
 *
 */

/**
 * @param {number} n - no of rows
 * @returns {string[]} result
 * Time Complexity : O(n²)
 * Space Complexity : O(n²)
 */
function generateIncreasingNumberTriangle(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += i + j;
    }
    result.push(line);
  }
  return result;
}

const pattern = generateIncreasingNumberTriangle(5);
pattern.forEach((line) => console.log(line));

/**
 * Output
1
23
345
4567
56789
 */
