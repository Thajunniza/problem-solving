console.log("Alphabet Triangle Pattern");


/**
 * 🧠 Solution Explanation:
 *
 * Goal:
 * Print a right-angled triangle pattern using English alphabets,
 * where each row starts from 'A' and prints letters sequentially
 * up to the row index.
 *
 * Example for n = 5:
 * A
 * A B
 * A B C
 * A B C D
 * A B C D E
 *
 * 🔹 Pattern Observation:
 * - Each row begins with 'A'.
 * - The number of alphabets in each row equals the row number.
 * - Characters are printed using ASCII conversion:
 *   'A' has ASCII code 65 → use String.fromCharCode(65 + j).
 *
 * 🔹 Approach:
 * 1️. Outer loop → runs from 0 to n-1 (for rows)
 * 2️. Inner loop → runs from 0 to i (for alphabets)
 * 3️. Convert (65 + j) → corresponding alphabet
 * 4️. Add a space after each letter for better readability
 * 5️. Trim and push each row string into result[]
 *
 * 🔹 Example Walkthrough (n = 4):
 * Row 1: A
 * Row 2: A B
 * Row 3: A B C
 * Row 4: A B C D
 */


/**
 * @param {number} n - no of rows
 * @returns {string[]}
 * Time Complexity : O(n²)
 * Space Complexity : O(n²) 
 */
function generateAlphabetTrianglePattern(n){
    let result = [];
    for( let i =0; i < n; i++){
        let line = "";
        for( let j = 0 ; j <= i; j++){
            line += String.fromCharCode(65 + j );
            line += ' ';
        }
        result.push(line.trim());
    }
    return result;
}

const pattern = generateAlphabetTrianglePattern(5);
pattern.forEach(line => console.log(line));

/**
 * Output
A 
A B 
A B C 
A B C D 
A B C D E
 */