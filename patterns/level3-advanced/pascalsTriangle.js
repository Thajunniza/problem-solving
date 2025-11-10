
/** 
# Intuition
Pascal’s Triangle has i rows where each row contains i elements.
- The first and last values of every row are 1.
Every inner value is the sum of the two values directly above it: row[j] = prev[j - 1] + prev[j].
- This recurrence is equivalent to binomial coefficients and naturally lends itself to a row‑by‑row dynamic programming construction.

# Approach
- Maintain a prev array that holds the previous row.
- For each row i from 1 to numRows:
    - Create an empty line (length i).
    - For each column j from 0 to i - 1:
        If j === 0 or j === i - 1, push 1 (edges).
        Else push prev[j - 1] + prev[j] (inner values from the previous row).
- Push line into result and set prev = line to use for the next iteration.

Edge cases
- If numRows === 0, return [].
- If numRows === 1, return [[1]].

# Complexity
- Time complexity:
O(n²)

- Space complexity:
o(n²)

**/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [];
    let prev = [];
    for (let i = 1; i <= numRows; i++) {
        let line = [];
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) {
                line.push(1);
            }
            else {
                line.push(prev[j - 1] + prev[j]);
            }
        }
        prev = line;
        result.push(line);
    }
    return result;
};

console.log(generate(5));

/**
 * Output
[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
 */
