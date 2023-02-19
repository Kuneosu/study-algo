def solution(eme):
    eme_order = sorted(eme,reverse=True)
    seq = []
    for i in eme :
        seq.append(eme_order.index(i)+1)
    return seq