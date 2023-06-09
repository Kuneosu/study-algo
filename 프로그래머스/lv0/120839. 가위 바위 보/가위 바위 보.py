def solution(rsp):
    answer=''
    for a in rsp:
        if a == '2':
            answer = answer+'0'
        elif a == '0':
            answer = answer+'5'
        elif a == '5' :
            answer = answer+'2'
    return answer