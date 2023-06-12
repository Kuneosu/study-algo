def solution(numbers):
    answer = 0
    numbers = sorted(numbers)
    n1 = numbers[0]*numbers[1]
    n2 = numbers[-1]*numbers[-2]
    answer = n1 if n1 >= n2 else n2
    return answer