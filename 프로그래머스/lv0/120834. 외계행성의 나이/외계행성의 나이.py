def solution(n):
    age = ""
    n = str(n)
    for i in n :
        age += chr(ord(i)+49)
    return age