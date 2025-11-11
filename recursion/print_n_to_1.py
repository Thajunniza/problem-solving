def print_n_to_1(n: int) -> None:
    """
    
    Prints numbers from n to 1 using recursion.
    
    Args:
    n (int) : The upper limit of number to print from n to 1.
    
    Returns:
    None.
    
    Output:
        >>> print_n_to_1(5)
        5 4 3 2 1 
        
    """
    if n == 0:
        return
    print(n, end=" ")
    print_n_to_1(n - 1)


print_n_to_1(5)
