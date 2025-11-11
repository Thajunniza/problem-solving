console.log("Concentric Number Square Pattern");

/**
 * 🧠 Solution Explanation:
 * The grid has (2n - 1) rows and columns.
 * Each cell’s value depends on its distance from the outer boundary.
 * Formula:
 *   value = n - min(i, j, size - 1 - i, size - 1 - j)
 *
 * Example (n = 6):
66666666666
65555555556
65444444456
65433333456
65432223456
65432123456
65432223456
65433333456
65444444456
65555555556
66666666666
 *
 * Time Complexity : O(n²)
 * Space Complexity: O(n²)
 *
 * @param {number} n - number of layers
 * @returns {string[]} result - array of strings representing each row
 */
function generateConcentricNumberSquarePattern(n) {
  const size = 2 * n - 1;
  const result = [];
  for (let i = 0; i < n; i++) {
    let line = "";
    let left = i;
    let right = size - i;
    for (let j = 0; j < size; j++) {
      if (j >= left && j < right) {
        line += n - i;
      } else {
        line += j < n ? n - j : j - n + 2;
      }
    }
    result.push(line);
  }

   for (let i = n - 2; i >= 0; i--) {
    let line = "";
    let left = i;
    let right = size - i;
    for (let j = 0; j < size; j++) {
      if (j >= left && j < right) {
        line += n - i;
      } else {
        line += j < n ? n - j : j - n + 2;
      }
    }
    result.push(line);
  }

  return result;
}

// Example usage
const pattern = generateConcentricNumberSquarePattern(6);
pattern.forEach((line) => console.log(line));

/**
 * ✅ Output (n = 6):
 * 6 6 6 6 6 6 6 6 6 6 6
 * 6 5 5 5 5 5 5 5 5 5 6
 * 6 5 4 4 4 4 4 4 4 5 6
 * 6 5 4 3 3 3 3 3 4 5 6
 * 6 5 4 3 2 2 2 3 4 5 6
 * 6 5 4 3 2 1 2 3 4 5 6
 * 6 5 4 3 2 2 2 3 4 5 6
 * 6 5 4 3 3 3 3 3 4 5 6
 * 6 5 4 4 4 4 4 4 4 5 6
 * 6 5 5 5 5 5 5 5 5 5 6
 * 6 6 6 6 6 6 6 6 6 6 6
 */
