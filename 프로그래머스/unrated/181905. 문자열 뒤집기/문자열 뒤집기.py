def solution(my_string, s, e):
    answer = list(my_string)
    rev = answer[s:e+1] 
    rev = rev[::-1]
    answer[s:e+1] = rev
    return ''.join(answer)