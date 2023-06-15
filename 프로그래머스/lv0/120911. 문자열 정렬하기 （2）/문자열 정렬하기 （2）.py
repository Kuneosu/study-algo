def solution(my_string):
    answer = list(my_string.lower())
    answer = ''.join(sorted(answer))
    return answer