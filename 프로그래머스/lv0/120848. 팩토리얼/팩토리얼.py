from math import factorial as fac
def solution(n):
    answer = 0
    for i in range (10):
        if fac(i+1) <= n:
            answer = i+1
    return answer