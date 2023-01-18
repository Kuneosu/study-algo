def group_checker(s):
    answer = 0
    now = s[0]
    past = []
    for i in s :
        if i != now :
            past.append(now)
            now = i
    past.append(now)
    for i in past :
        if past.count(i) >= 2:
            answer = 0
            break
        else :
            answer = 1
    return answer

n = int(input())
g_word = 0
for i in range(n):
    s = input()
    g_word += group_checker(s)
print(g_word)