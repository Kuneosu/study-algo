def solution(n):
    # answer 에 n*n 배열을 생성하고 기본값으로 0 을 삽입
    answer= [[0 for _ in range(n)] for _ in range(n)]
    
    # 배열의 모든 값 탐색
    for i in range(n):
        for j in range(n):
            # i = j 일 때 배열에 1 삽입
            if i == j:
                answer[i][j] = 1
    return answer