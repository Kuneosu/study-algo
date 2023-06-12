def solution(num_list):
    answer = 0
    o = ''
    e = ''
    for n in num_list:
        if n%2 ==0:
            e += str(n)
        else:
            o += str(n)
    answer = int(e) + int(o)
    return answer