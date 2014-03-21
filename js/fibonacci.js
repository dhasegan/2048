var fibonacci_sequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]

function isFibonacci(value) {
    return fibonacci_sequence.indexOf(value) > -1;
}

function inverseFibonacci(value) {
    return fibonacci_sequence.indexOf(value);
}

function consecutiveFibonacciItems(value1, value2) {
    if (value1 == 1 && value2 == 1) {
        return true;
    }
    return Math.abs(inverseFibonacci(value1) - inverseFibonacci(value2)) == 1;
}