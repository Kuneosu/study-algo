def solution(myString, pat):  
    answer = 0
    r = len(myString) - len(pat) + 1
    for i in range(r):
        if myString[i:i+len(pat)] == pat :
            answer+=1
    return answer