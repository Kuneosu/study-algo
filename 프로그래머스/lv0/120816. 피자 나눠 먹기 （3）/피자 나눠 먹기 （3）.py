def solution(slice,n):
    i = 1
    while True:
        if (slice*i)/n >= 1:
            answer = i
            return answer
        i += 1