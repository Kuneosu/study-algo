def room(h,w,n):
    floor = 0
    number = 1
    for i in range(n):
        floor += 1
        if floor > h :
            floor = 1
            number += 1
    floor *= 100
    room = floor + number
    return room

t = int(input())
case = []
for i in range(t):
    h,w,n = map(int,input().split())
    case.append(room(h,w,n))
for r in case:
    print(r)