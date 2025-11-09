console.log("Symmetric Butterfly Pattern");



/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a symmetric butterfly pattern where two mirrored right triangles
 * face each other. The wings expand until the middle and then contract symmetrically.
 *
 * Example for n = 6:
 * *          *
 * **        **
 * ***      ***
 * ****    ****
 * *****  *****
 * ************
 * *****  *****
 * ****    ****
 * ***      ***
 * **        **
 * *          *
 *
 * 🔹 Pattern Logic:
 * - Total columns = n * 2
 * - Total rows = (2 * n) - 1
 * - For top half (i ≤ n):
 *     Left wing: j ≤ i
 *     Right wing: j > col - i
 * - For bottom half (i > n):
 *     Mirror index: k = col - i
 *     Left wing: j ≤ k
 *     Right wing: j > col - k
 *
 * 🔹 Approach:
 * 1️. Calculate total columns = 2 * n
 * 2️. Loop i = 1 → (2n - 1)
 * 3️. For each row, use conditions to fill '*' or ' ' symmetrically.
 * 4️. Push each line to result[].
 *
 * 🔹 Complexity:
 * Time Complexity : O(n²)
 * Space Complexity: O(n²)
 */

/**
 * 
 * @param {*} n - no of rows
 * @returns {string[]} result
 */
function generateSymmetricButterflyPattern(n) {
  let result = [];
  let col = n * 2;
  for ( let i = 1; i < col ; i ++){
    let line = "";
    if(i <= n){
        for(let j = 1; j <= col; j++){
            line += (j <= i) || ( j > col - i) ? '*' : ' ';
        }
    }
    else{
        let k = col - i;
        for(let j = 1; j <= col; j++){
            line += (j <= k) || ( j > col - k) ? '*' : ' ';
        }
    }
    result.push(line);
  }
  return result;
}

const pattern = generateSymmetricButterflyPattern(6);
pattern.forEach(line => console.log(line));


/**
 * 
 * 
 * 
 * 
 * Output (n = 3):
Symmetric Butterfly Pattern
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
*          *
*/