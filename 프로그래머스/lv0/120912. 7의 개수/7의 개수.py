def solution(array):
    answer = 0
    arr = ''
    for n in array: 
        arr += str(n)
    for s in arr:
        if s == '7':
            answer += 1
    return answer