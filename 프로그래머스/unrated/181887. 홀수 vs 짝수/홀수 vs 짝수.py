def solution(num_list):
    o = 0
    e = 0
    answer = 0
    counter = 1
    for i in num_list:
        if counter == 1:
            o += i
            counter += 1
        else:
            e += i
            counter -= 1
    
    answer = o if o >= e else e
    
    return answer