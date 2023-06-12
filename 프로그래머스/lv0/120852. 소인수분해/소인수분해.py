def solution(n):
    answer = []
    nums = []
    d = 2
    while(d<=n):
        if n%d == 0:
            nums.append(d)
            n = n//d
        else:
            d += 1
    for i in nums :
        if i not in answer:
            answer.append(i)
    return answer