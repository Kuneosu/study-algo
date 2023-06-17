def solution(my_string, indices):
    answer = list(my_string)
    indices = sorted(indices)
    counter = 0
    for i in indices:
        del answer[i-counter]
        counter += 1
    return ''.join(answer)