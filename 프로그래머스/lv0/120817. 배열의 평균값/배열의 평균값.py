def solution(numbers):
    sum = 0
    count = 0
    for i in numbers:
        sum += i
        count += 1
    answer = sum/count
    return answer