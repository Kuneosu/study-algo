def solution(my_string, queries):
    my_string = list(my_string)
    for s,e in queries: 
        if s>0 :
            change = my_string[e:s-1:-1]
            idx = s 
            for c in change:
                my_string[idx] = c
                idx+=1
        else:
            change = my_string[e::-1]
            idx=s
            for c in change:
                my_string[idx] = c
                idx+=1
                
        
    return ''.join(my_string)