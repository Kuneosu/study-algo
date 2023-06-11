def solution(strArr):
    answer = []
    count = 1
    for s in strArr:
        if count % 2 == 0:
            answer.append(s.upper())
        else:
            answer.append(s.lower())
        count += 1
    return answer