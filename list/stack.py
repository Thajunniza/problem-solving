""" 
Stack Data Structure
# Crate a class Stack and constructor will initialize
# python list
# class variable that I’m calling items, and I’m assigning it to an empty list. self.items
"""

class Stack:
    def __init__(self):
        self.items = []
# inserts an item    
    def append(self,item):
        self.items.append(item)
# gives the last item and remove it    
    def pop(self):
        return self.items.pop()
# returns all item
    def getStack(self):
        return self.items
# check if the arrayis empty
    def isEmpty(self):
      return self.items == []  
# Returns the last element of the list
    def peek(self):
        if not self.isEmpty():
            return self.items[-1]    

