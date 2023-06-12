def solution(my_strings, parts):
    answer = ''
    for m in range(len(parts)):
        answer += my_strings[m][parts[m][0]:parts[m][1]+1]
    return answer