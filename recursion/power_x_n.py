def generatePower(x: int, n: int) -> int:
    """
    Calculate the power of the number

    Args:
        x (int): value
        n (int): power

    Returns:
        result(int)
        
    Output:
        >>> generatePower(2,5)
        32
    """
    if n == 0:
        return 1
    result = x * generatePower(x, n - 1)
    return result


print(generatePower(2, 5))
