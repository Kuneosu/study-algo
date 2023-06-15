def solution(arr, intervals):
    answer = []
    for i in intervals:
        a = i[0]
        b = i[1]
        answer += arr[a:b+1]
    return answer