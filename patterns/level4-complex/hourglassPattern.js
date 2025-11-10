console.log("Hourglass Pattern");

console.log("Hourglass Pattern (filled, fixed width)");


/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a vertically symmetric **hourglass** made of '*' characters by
 * combining an **inverted pyramid** (top) and a **normal pyramid** (bottom).
 * The figure narrows to a single star in the middle row, then expands back.
 *
 * Example for n = 5 (total width = 2n - 1 = 9):
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 *
 * 🔹 Pattern Logic:
 * - Total rows = 2 * n - 1
 * - Total columns (max width) = 2 * n - 1  (odd, same for every row conceptually)
 * - For each row, compute:
 *    • Left padding (spaces):  i'            where i' = row index from top half (0..n-1..0)
 *    • Star count:             width - 2*i'  where width = 2*n - 1
 * - The sequence of i' over all rows is: 0,1,2,...,n-1, n-2,...,2,1,0
 *   This produces a decreasing odd sequence of stars to the middle,
 *   then increasing symmetrically.
 *
 * 🔹 Logic  Approaches:
 * Fixed-width bounds (keeps trailing spaces for a rectangular grid):
 *    - For row r in 1..(2n-1):
 *        mirror = 2*n - r
 *        start  = (r <= n) ? r      : mirror
 *        end    = (r <= n) ? mirror : r
 *      For col c in 1..(2n-1):
 *        print '*' if start <= c <= end else ' '
 *
 * 🔹 Recommended Variables (clarity):
 * - n: half-height (>= 1)
 * - width = 2*n - 1
 * - top index i: 0..n-1
 * - mirror level i' for any row: i' in 0..n-1..0 (use min(r-1, 2n-1-r))
 *
 * 🔹 Complexity:
 * - Time Complexity : O(n²)   (nested loops over rows × columns or rows × characters)
 * - Space Complexity: O(n²)   if you store all lines; O(1) extra if you stream/print lines
 *
 * ✅ Edge Cases:
 * - n = 1 → "*"
 * - Input should be a positive integer (n >= 1)


/**
 * Generates a filled hourglass pattern with fixed width (2n - 1).
 * Each line keeps trailing spaces to preserve a rectangular grid.
 * @param {number} n - number of rows in half (n >= 1)
 * @returns {string[]} lines
 */
function generateHourglassPattern(n) {
  if (!Number.isInteger(n) || n < 1) throw new Error("n must be an integer >= 1");
  const result = [];
  const rows = 2 * n - 1;

  for (let i = 1; i <= rows; i++) {
    const mirror = 2 * n - i;               // mirrors i across the center
    const startIndex = i <= n ? i : mirror; // left bound of stars (1-based)
    const endIndex   = i <= n ? mirror : i; // right bound of stars (1-based)

    let line = "";
    for (let j = 1; j <= rows; j++) {
      line += j >= startIndex && j <= endIndex ? "*" : " ";
    }
    result.push(line);
  }
  return result;
}

// Demo
const pattern = generateHourglassPattern(4);
pattern.forEach((line) => console.log(line));

/**
 * Output
Hourglass Pattern
*******
 ***** 
  ***  
   *   
  ***  
 ***** 
******* 
 */
