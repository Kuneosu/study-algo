def solution(sides):
    m = max(sides)
    sides.remove(m)
    s = sum(sides)
    if m < s :
        answer = 1
    else : 
        answer = 2
    return answer