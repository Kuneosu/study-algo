def solution(myStr):
    answer = myStr
    answer = answer.replace('a',' ')
    answer = answer.replace('b',' ')
    answer = answer.replace('c',' ')
    answer = answer.split()
    if len(answer) == 0:
        answer = ["EMPTY"]
    return answer