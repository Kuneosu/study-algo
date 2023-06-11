def solution(num_list):
    answer = 0
    for n in num_list:
        if n >= 0:
            answer+=1
        else:
            return answer
        
        if answer == len(num_list):
            return -1
    return answer