import itertools

def solution(n, slicer, num_list):
    answer = []
    a = slicer[0]
    b = slicer[1]
    c = slicer[2]
    if n == 1 :
        answer.append(num_list[:b+1])
        answer = list(itertools.chain(*answer))
    elif n == 2:
        answer.append(num_list[a:])
        answer = list(itertools.chain(*answer))
    elif n == 3:
        answer.append(num_list[a:b+1])
        answer = list(itertools.chain(*answer))
    elif n == 4:
        for i in range(a,b+1,c):
            answer.append(num_list[i])
        
    return answer