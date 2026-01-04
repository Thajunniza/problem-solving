"""
===========================================================
Find the Divisors of a number/interger
===========================================================

🧩 Problem:
Given an interger n list down all the possible divisors:

        n % i == 0

-----------------------------------------------------------
Example:
-----------------------------------------------------------
Input:
    n   = 6

Output: [1,2,3,6]

Explanation:
1 * 6 = 6
2 * 3 = 6
3 * 2 = 6
6 * 1 = 6

-----------------------------------------------------------
Brute Force Approach 1: loop all till n
-----------------------------------------------------------
1. i cant be greater than n 
2. so loop it n and check if n % i == 0
3. if yes add it to the result
-----------------------------------------------------------
⏱️ Time & Space Complexity
-----------------------------------------------------------
Time:  O(n)  
Space: O(n)
-----------------------------------------------------------
🧠 Best Approach: iterate up to  sqrt of n
-----------------------------------------------------------
1. If yu look at the pattern the divisors are come in pairs
Example

For n = 36:
    1 × 36
    2 × 18
    3 × 12
    4 × 9
    6 × 6
so If a number i divides n, then:
    n = (i * n )    / i
    

2. So Iterate till sqrt of n which intend i * i <= n :
-----------------------------------------------------------
⏱️ Time & Space Complexity
-----------------------------------------------------------
Time:  O(sqrt(n))  
Space: O(n)

"""

# BruteForce Solution
class Solution1:
    def getDivisors(self,n:int):
        result = []
        i = 1
        while i <= n:
            if(n % i) == 0:
                result.append(i)
            i += 1
        return result

# Optimal Solution
class Solution2:
    def getDivisors(self,n:int):
        result = []
        i = 1
        while (i * i ) <= n:
            if (n % i) == 0:
                result.append(i)
                j = n // i
                if (i != j):
                    result.append(j)
            i += 1
            
        return result

# -----------------------------------------------------------
# Driver Examples
# -----------------------------------------------------------
if __name__ == "__main__":
    sol1 = Solution1()
    print(f"The Divisor of 6 is : {sol1.getDivisors(6)}")
    print(f"The Divisor of 5 is : {sol1.getDivisors(5)}")
    print(f"The Divisor of 36 is : {sol1.getDivisors(36)}")
    
    sol2 = Solution2()
    print(f"The Divisor of 6 is : {sol2.getDivisors(6)}")
    print(f"The Divisor of 5 is : {sol2.getDivisors(5)}")
    print(f"The Divisor of 36 is : {sol2.getDivisors(36)}")