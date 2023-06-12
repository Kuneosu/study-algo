def solution(myString, pat):
    answer = 0
    p = ""
    for s in pat:
        if s == "A":
            p += "B"
        else : 
            p += "A"
    if p in myString:
        answer = 1
        
    return answer