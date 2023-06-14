def solution(order):
    answer = 0
    order = str(order)
    for o in order:
        if o == '3':
            answer += 1
        if o == '6':
            answer +=1
        if o == '9':
            answer +=1 
    return answer