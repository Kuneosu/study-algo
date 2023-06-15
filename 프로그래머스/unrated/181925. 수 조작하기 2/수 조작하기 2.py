def solution(numLog):
    answer = ''
    for i in range(len(numLog)-1):
        log = numLog[i+1]-numLog[i]
        if log == 1:
            answer += 'w'
        elif log == -1:
            answer += 's'
        elif log == 10:
            answer += 'd'
        elif log == -10:
            answer += 'a'
        else:
            answer == 'e'

    return answer