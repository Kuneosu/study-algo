def solution(a, b, c, d):
    answer = 0
    nums = sorted([a,b,c,d])
    same_count = 0
    # 동일한 주사위 수 파악
    for n in nums:
        if nums.count(n) > same_count:
            same_count = nums.count(n)
    # 주사위의 숫자 4개가 모두 동일한 경우
    if same_count == 4 :
        answer = nums[0] * 1111
    # 주사위의 숫자 3개가 동일한 경우
    elif same_count == 3 :
    # 숫자를 정렬 해두었기 때문에 nums[1] 과 nums[2] 는 반드시 3개짜리 숫자
        p = nums[1]
    # 3개짜리 숫자와 nums[0]이 동일하지 않다면 q = nums[0] 동일하다면 nums[3]
        q = nums[0] if nums[0] != nums[1] else nums[3]
        answer = (10*p+q)**2
    # 주사위의 숫자 2개가 동일한 경우
    elif same_count == 2:
        # 2/2 인지 2/1/1 인지 구별하기 위한 변수
        check = set(nums)
        # 중복을 제거했을 때 길이가 2 라면 2/2 아니라면 2/1/1
        # if 2/2
        if len(check) == 2:
        # 정렬 했기 때문에 nums[1] != nums[2]
            p = nums[1]
            q = nums[2]
            answer = (p+q)*abs(p-q)
        # if 2/1/1
        else:
            for num in nums:
                c = nums.count(num)
                # 해당 숫자가 배열내에 2번 들어있다면 숫자를 2번 삭제
                if c == 2 :
                    nums.remove(num)
                    nums.remove(num)
            # 남은 숫자는 중복되지 않는 두 숫자 이므로 [0] 과 [1] 선택
            answer = nums[0]*nums[1]
    else:
        answer = nums[0]
        
    return answer