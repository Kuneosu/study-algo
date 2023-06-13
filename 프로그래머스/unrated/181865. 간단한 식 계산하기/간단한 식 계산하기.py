def solution(binomial):
    answer = 0
    v = binomial.split()
    v0 = int(v[0])
    v2 = int(v[2])
    if v[1] == "+":
        answer = v0+v2
    elif v[1] == "-":
        answer = v0-v2
    else:
        answer = v0*v2
    return answer