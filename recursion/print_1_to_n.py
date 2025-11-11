

def print_1_to_n(n: int) -> None:
    """
    Prints numbers from 1 to n in increasing order using recursion.

    Args:
        n (int): The upper limit number to print from 1 to n.

    Returns:
        None

    Output:
        >>> print_1_to_n(5)
        1 2 3 4 5
    """
    if n == 0:
        return
    print_1_to_n(n - 1)
    print(n, end=" ")
    
print_1_to_n(5)
