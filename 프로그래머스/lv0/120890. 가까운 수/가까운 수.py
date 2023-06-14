def solution(array, n):
    answer = 0
    d = []
    array = sorted(array)
    for i in array:
        d.append(abs(n-i))
    answer = array[d.index(min(d))]
    return answer