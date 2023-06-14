def solution(code):
    ret = ''
    idx = 0
    mode = 0
    for c in code:
        # mode = 0
        if mode == 0:
            # code[idx]가 "1"이 아닐때
            if c != "1":
                # idx가 짝수일 때
                if idx %2 == 0:
                    ret += c
            # code[idx]가 "1"일 때
            else:
                mode = 1
        # mode = 1
        else:
            # code[idx]가 "1"이 아닐때
            if c != "1":
                # idx가 홀수일 때
                if idx %2 == 1:
                    ret += c
            # code[idx]가 "1"일 때
            else:
                mode = 0
        idx += 1
                
    if ret == '':
        ret = "EMPTY"
    return ret