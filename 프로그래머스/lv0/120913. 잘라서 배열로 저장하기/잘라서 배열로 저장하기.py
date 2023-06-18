def solution(my_str, n):
    answer = []
    ans = ''
    counter = 0
    for i in range(len(my_str)):
        ans += my_str[i]
        counter += 1
        if counter == n:
            answer.append(ans)
            ans = ''
            counter = 0
    if ans:
        answer.append(ans)
    return answer