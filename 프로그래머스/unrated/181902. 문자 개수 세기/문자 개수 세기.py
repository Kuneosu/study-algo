def solution(my_string):
    answer = []
    for i in range(ord('A'),ord('z')+1):
        if i >= 91 and i<= 96:
            continue
        answer.append(my_string.count(chr(i)))
    return answer