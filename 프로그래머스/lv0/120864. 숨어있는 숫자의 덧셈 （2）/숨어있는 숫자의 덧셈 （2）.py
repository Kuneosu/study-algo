def solution(my_string):
    answer = 0
    d = '0'
    for s in my_string:
        if s.isdecimal():
            d += s
        else:
            answer += int(d)
            d = '0'
    answer += int(d)
    return answer