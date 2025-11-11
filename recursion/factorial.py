def getFactorial(n: int):
    """
    Returns the factorial of a number.

    Args:
        n (int): The number to calculate factorial for.

    Output:
        >>> getFactorial(5)
        120
    """
    if n == 1 or n == 0:
        return 1
    
    factorial = n * getFactorial(n - 1)
    return factorial

print(getFactorial(5))
