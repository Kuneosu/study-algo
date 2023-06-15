def solution(arr, queries):
    for q in queries:
        for i in range(len(arr)):
            if i >= q[0] and i<=q[1] and i%q[2] == 0:
                arr[i] = arr[i]+1
    return arr