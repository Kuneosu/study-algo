def solution(arr, queries):
    # ans = 각 쿼리의 결과값을 담을 리스트
    ans = []
    # answer = 전체 쿼리의 결과값을 담을 리스트
    answer=[]
    
    for q in queries:
        s = q[0]
        e = q[1]
        k = q[2]
        # 각 쿼리 별 조건이 부합할 경우 ans 에 결과값 저장
        for i in range(s,e+1):
            if arr[i]>k:
                ans.append(arr[i])
        # ans 에 결과값이 있을 경우 가장 작은값을 answer 에 저장하고 리스트 비움
        if ans:
            answer.append(min(ans))
            ans = []
        # ans 에 결과값이 없을 경우 answer 에 -1 저장
        else:
            answer.append(-1)
    return answer