def solution(ineq, eq, n, m):
    answer = 0
    if eq == "=":
        if ineq == ">":
            answer = 1 if n >= m else 0
        else : answer = 1 if n <= m else 0
    else:
        if ineq == ">":
            answer = 1 if n > m else 0
        else : answer = 1 if n < m else 0
    return answer