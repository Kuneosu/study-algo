def solution(dots):
    answer = 0
    x = dots[0][0]
    y = dots[0][1]
    height = 0
    width = 0
    for i,j in dots:
        if x==i and y!=j:
            height = abs(y-j)
        elif x!=i and y==j:
            width = abs(x-i)
    answer = height * width
    return answer