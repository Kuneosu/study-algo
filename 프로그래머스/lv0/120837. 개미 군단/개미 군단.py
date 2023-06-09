import math 

def solution(hp):
    answer = 0
    ant_5 = math.trunc(hp/5)
    hp = hp%5
    ant_3 = math.trunc((hp)/3)
    hp = hp%3
    answer = ant_5 + ant_3 + hp
    return answer