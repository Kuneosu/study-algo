def solution(a, b):
    ab = int(str(a)+str(b))
    a2b = a*b*2
    answer = ab if ab >= a2b else a2b
    return answer