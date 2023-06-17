def solution(myString, pat):
    r_s = myString[::-1]
    r_p = pat[::-1]
    fd = r_s.find(r_p)+len(r_p)
    answer = myString[:len(myString)-fd+len(pat)]
    return answer