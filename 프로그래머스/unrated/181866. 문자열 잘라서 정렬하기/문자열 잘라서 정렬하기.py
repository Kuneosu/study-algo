def solution(myString):
    answer = sorted(myString.split("x"))
    answer = [x for x in answer if x != '']
    return answer