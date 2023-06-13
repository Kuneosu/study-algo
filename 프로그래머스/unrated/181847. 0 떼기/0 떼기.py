def solution(n_str):
    answer = ''
    zero = 0
    for n in n_str:
        if n != '0':
            answer = n_str[n_str.find(n):]
            break
    return answer