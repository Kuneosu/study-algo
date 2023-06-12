def solution(str1, str2):
    l = len(str1)
    answer = ''
    for i,j in zip(range(l),range(l)):
        answer += str1[i]
        answer += str2[j]
    return answer