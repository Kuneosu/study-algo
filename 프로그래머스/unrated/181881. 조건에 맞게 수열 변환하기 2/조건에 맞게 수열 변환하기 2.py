def solution(arr):
    array = []
    result = arr.copy()
    x=0
    while array != result:
        array = result.copy()
        result = []
        for i in array:
            if i%2==0 and i>=50:
                result.append(i//2)
            elif i%2==1 and i<=50:
                result.append(i*2+1)
            else:
                result.append(i)
        x+=1
    
        
    return x-1