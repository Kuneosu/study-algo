def solution(arr):
    arr_index = []
    answer = []
    for i in range(len(arr)):
        if arr[i]==2:
            arr_index.append(i)
    if arr_index:
        min_index = min(arr_index)
        max_index = max(arr_index)
    else:
        return [-1]
    if min_index == max_index:
        answer.append(arr[max_index])
    else:
        for i in range(min_index,max_index+1):
            answer.append(arr[i])
    return answer