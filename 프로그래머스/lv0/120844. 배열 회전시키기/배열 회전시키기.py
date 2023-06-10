def solution(numbers, direction):
    answer=[]
    temp = ""
    if direction == "right":
        answer.append(numbers[-1])
        for item in numbers:
            answer.append(item)
        del answer[-1]
    elif direction == "left":
        temp = numbers[0]
        del numbers[0]
        for item in numbers:
            answer.append(item)
        answer.append(temp)
    return answer