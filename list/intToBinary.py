""" 
Convert Decimal Integer to Binary

# Solution
# 1. Divide the number by two. Extract the non-fractional part from the answerand record the remainder from the division. 
# 2. Keep dividing the answer from the previous calculation by two until you reach zero and keep recording the remainders. 
# 3. You have to read from the bottom of the remainders(MSB) tothe top(LSB) to get the binary equivalent of the integer. 

# Example  binary equivalent for 242 is: 11110010
"""

from stack import Stack

def convert_int_to_bin(dec_num):
    quotient = 0
    remainder = 0
    stack = Stack()
    binary = ""
    while  not dec_num == 0:
        quotient = dec_num // 2
        remainder = dec_num % 2
        stack.append(remainder)
        dec_num = quotient
        
    
    while  not stack.isEmpty():
        binary += str(stack.pop())
    
    return binary

print(convert_int_to_bin(242))
print(convert_int_to_bin(56))
print(convert_int_to_bin(2))
print(convert_int_to_bin(32))
print(convert_int_to_bin(10))

print(int(convert_int_to_bin(56),2)==56)
    
    
        