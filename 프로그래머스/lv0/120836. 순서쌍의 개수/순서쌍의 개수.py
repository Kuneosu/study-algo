def solution(n):
    cnt = 0
    i=1
    while(i*i <= n):
        if(i*i == n):
            cnt += 1
        elif (n % i == 0):
            cnt += 2
        i += 1
    return cnt