console.log("Alphabet Ramp Pattern");

/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a right-angled triangle pattern where each row contains
 * repeating alphabets. The letter used in each row corresponds to
 * the row number — i.e., Row 1 → 'A', Row 2 → 'B', and so on.
 *
 * Example for n = 6:
 * A
 * B B
 * C C C
 * D D D D
 * E E E E E
 * F F F F F F
 *
 * 🔹 Pattern Observation:
 * - Outer loop controls rows (i = 0 → n-1)
 * - Inner loop prints the same letter multiple times
 * - Letter for a row = 'A' + i = String.fromCharCode(65 + i)
 * - Add a space after each letter for clean alignment
 *
 * 🔹 Approach:
 * 1️. Initialize an empty array `result`
 * 2️. For each row (i):
 *     - Generate line by repeating the current alphabet i+1 times
 *     - Add each letter followed by a space
 *     - Trim trailing space before pushing to result[]
 * 3️. Return and print pattern
 *
 * 🔹 Complexity:
 * Time Complexity : O(n²) → nested loops for rows × columns
 * Space Complexity: O(n²) → storing n strings in result[]
 */

/**
 * Alphabet Ramp Pattern
 * @param {number} n - no of rows
 * @returns {string[]} - result
 */
function generateAlphabetRampPattern(n){
    let result = [];
    for (let i = 0; i < n; i++){
        let line = "";
        for(let j = 0 ; j <= i; j++){
            line += String.fromCharCode( 65 + i);
            line += " ";
        }
        result.push(line.trim());
    }
    return result
}

const pattern = generateAlphabetRampPattern(6);
pattern.forEach(line => console.log(line));


/**
 * Output
Alphabet Ramp Pattern
A
B B
C C C
D D D D
E E E E E
F F F F F F
 */