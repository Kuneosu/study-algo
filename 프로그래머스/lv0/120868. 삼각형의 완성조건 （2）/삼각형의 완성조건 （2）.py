def solution(sides):
    a = sides[0]
    b = sides[1]
    count = 0
    
    if a == b :
        # c == a
        count += 1
        # c > a
        for c in range(a+1,a+b):
            count +=1
        # c < a 
        for c in range(a-1,0,-1):
            if a+c>b:
                count+=1
    else:
        big = a if a>b else b
        small = b if a>b else a
        # c > big
        for c in range(big+1,big+small):
            count+=1
        # c < small
        for c in range(small-1,0,-1):
            if small+c > big:
                count+=1
        # big > c > small
        for c in range(small+1,big):
            if c+small > big:
                count+=1
        # c == big
        if big+small > big :
            count += 1
        # c == small
        if small*2 > big :
            count += 1
                
    return count