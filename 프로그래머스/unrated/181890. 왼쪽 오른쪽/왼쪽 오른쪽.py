def solution(str_list):
    answer = []
    l_index = 21
    r_index = 21
    if 'l' in str_list:
        l_index = str_list.index('l')    
    if 'r' in str_list:
        r_index = str_list.index('r')
    
    if l_index < r_index:
        answer = str_list[:l_index]
    else:
        answer = str_list[r_index+1:]
    return answer