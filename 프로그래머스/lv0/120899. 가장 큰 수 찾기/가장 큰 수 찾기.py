def solution(array):
    answer = []
    m = max(array)
    i = array.index(m)
    answer.append(m)
    answer.append(i)
    return answer