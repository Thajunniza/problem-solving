from stack import Stack

""" 
Reverse String
"""

## using python
input = "Thajunniza"
print(input[::-1])
print(len(input))

## using list

stack = Stack()
def reverseString(input):
    revString = ""
    for i in range(len(input)):
        stack.append(input[i])
    
    while not stack.isEmpty():
        revString += stack.pop()
    
    return revString

print(reverseString(input))
input_str = "!azinnujahT  olleH"
print(reverseString(input_str))