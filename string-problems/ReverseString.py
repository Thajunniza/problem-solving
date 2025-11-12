"""
Problem — Reverse a String

Approach 1: Slicing
Approach 2: Iteration

Goal:
Reverse a given string using slicing or manual iteration.
"""


def printReverseSlicing(word: str) -> None:
    """
    Reverse a string using slicing.

    Args:
        word (str): Input string.

    Time Complexity: O(N)
        - The slicing operation traverses the string once internally.
    Space Complexity: O(N)
        - A new reversed string is created in memory.

    Example:
        >>> printReverseSlicing("Thajunniza")
        azinnujahT
    """
    print(word[::-1])


def printReverseIteration(word: str) -> None:
    """
    Reverse a string manually using iteration.

    Args:
        word (str): Input string.

    Time Complexity: O(N)
        - Each character is processed once.
    Space Complexity: O(N)
        - A new reversed string is built character by character.

    Example:
        >>> printReverseIteration("PYTHON")
        NOHTYP
    """
    rev = ""
    for ch in word:
        rev = ch + rev  # prepend each character
    print(rev)


# Test Runs
if __name__ == "__main__":
    print("Approach 1 (Slicing): ", end="")
    printReverseSlicing("Thajunniza")

    print("Approach 2 (Iteration): ", end="")
    printReverseIteration("PYTHON")
