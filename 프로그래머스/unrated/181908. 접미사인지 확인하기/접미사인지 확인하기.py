def solution(my_string, is_suffix):
    l = len(is_suffix)
    m = my_string[-l:]
    
    if m == is_suffix:
        answer = 1
    else : answer = 0
    
    return answer