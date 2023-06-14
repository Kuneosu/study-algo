def solution(num, k):
    answer = -1
    idx = 1
    for s in str(num):
        if s == str(k) :
            return idx
        idx += 1
    return answer