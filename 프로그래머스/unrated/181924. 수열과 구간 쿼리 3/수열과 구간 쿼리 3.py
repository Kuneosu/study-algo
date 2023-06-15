def solution(arr, queries):
    for querie in queries:
        x = querie[0]
        y = querie[1]
        dif = arr[x]-arr[y]
        arr[x] = arr[x]-dif
        arr[y] = arr[y]+dif
    return arr