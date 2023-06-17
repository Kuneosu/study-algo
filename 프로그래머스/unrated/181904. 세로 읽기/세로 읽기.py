def solution(my_string, m, c):
    answer = ''
    word_list = ''
    counter = 0
    for s in my_string:
        word_list += s
        counter += 1
        if counter == m:
            word_list += ' '
            counter = 0
    word_list = word_list.split()
    for word in word_list:
        answer += word[c-1]
    return answer