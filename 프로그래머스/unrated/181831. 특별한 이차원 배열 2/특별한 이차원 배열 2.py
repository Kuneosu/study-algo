def solution(arr):
    answer = 0
    # 배열 내 모든 요소 탐색
    for i in range(len(arr)):
        for j in range(len(arr)):
            # 조건에 부합할 경우 answer 에 1 저장
            if arr[i][j] == arr[j][i]:
                answer = 1
            # 하나라도 조건에 부합하지 않을 경우 0 return
            else : return 0
    return answer