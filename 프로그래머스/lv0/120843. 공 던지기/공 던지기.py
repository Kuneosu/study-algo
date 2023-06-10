def solution(numbers, k):
    n = ((k-1)*2)%len(numbers)
    answer = numbers[n]
    return answer