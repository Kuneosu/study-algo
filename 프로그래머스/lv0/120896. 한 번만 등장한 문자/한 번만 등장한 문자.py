def solution(s):
    # 중복 문자를 저장할 리스트
    n = []
    answer = []
    for i in s:
        # 문자가 중복 리스트에 없고 결과값 리스트에 있다면 
        # = 중복값이라면 중복 리스트에 저장하고 결과값 리스트에서 제거
        if i in answer and i not in n:
            n.append(i)
            answer.remove(i)
        # 문자가 중복 리스트에 없다면 결과값 리스트에 추가
        if i not in n:
            answer.append(i)
    # 결과값 리스트를 사전순으로 정렬하고 문자열로 합침
    answer = ''.join(sorted(answer))
    return answer