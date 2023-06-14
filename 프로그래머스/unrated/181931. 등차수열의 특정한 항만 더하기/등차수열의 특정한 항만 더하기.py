def solution(a, d, included):
    answer = 0
    nums = []
    # 첫 항이 a , 공차가 d, 길이가 included와 같은 등차수열 생성
    for i in range(a,len(included)*d+a,d):
        nums.append(i)
        
    # included[i] 가 True 일때 answer 에 nums[i]를 더함
    for i in range(len(nums)):
        if included[i] == True:
            answer += nums[i]
    return answer