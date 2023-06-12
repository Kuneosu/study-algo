def solution(myString, pat):
    answer = 0
    m = myString.lower()
    p = pat.lower()
    if p in m :
        answer = 1
    return answer