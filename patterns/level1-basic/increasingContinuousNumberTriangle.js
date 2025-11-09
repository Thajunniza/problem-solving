console.log("Increasing Continuous Number Triangle");

/**
 * 🧠 Solution Explanation:
 * 
 * Goal:
 * Print a right-angled triangle of numbers where the sequence 
 * continues across rows without resetting — also known as **Floyd's Triangle**.
 *
 * Example for n = 5:
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 10
 * 11 12 13 14 15
 *
 *  Pattern Observation:
 * - Each row prints one more number than the previous row.
 * - Numbers continue incrementing from where the previous row ended.
 * - Use a counter variable (`num`) that starts at 1 and increments after each print.
 *
 * Approach:
 * 1️. Initialize `num = 1` before the loops.
 * 2️. Outer loop → controls rows (0 → n - 1).
 * 3️. Inner loop → runs `i + 1` times to print numbers for that row.
 * 4️. Append each number followed by a space, increment `num`.
 * 5️. Push trimmed line into result[] after each row.
 *
 * Example Walkthrough:
 * Row 1 → print 1 → num = 2
 * Row 2 → print 2 3 → num = 4
 * Row 3 → print 4 5 6 → num = 7
 
 */

/**
 * @param {number} n - no of rows
 * @returns {string[]} result
 * Time Complexity : O(n²)
 * Space Complexity : O(n²)
 */
function generateIncreasingContinuousNumberTriangle(n){
    let result = [];
    let num = 1;
    for (let i = 0; i < n; i++){
        let line ="";
        for(let j = 0; j <= i; j++){
            line += num + " ";
            num++;
        }
        result.push(line);
    }
    return result;
}

const pattern = generateIncreasingContinuousNumberTriangle(5);
pattern.forEach(line => console.log(line));

/**
 * Output
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
 */