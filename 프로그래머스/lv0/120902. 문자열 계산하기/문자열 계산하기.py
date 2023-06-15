def solution(my_string):
    m = my_string.split()
    answer = int(m[0])
    for i in range(len(m)):
        if m[i] == '+':
            answer += int(m[i+1])
        elif m[i] == '-': 
            answer -= int(m[i+1])
    return answer