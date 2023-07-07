function solution(numlist,n){
    // 주어진 숫자 n 과 각 숫자와의 거리를 구하고 오름차순으로 정렬하여 distance 에 저장합니다.
    const distance = (numlist.map(x => Math.abs(n - x))).sort((a,b)=>{return a-b;});
    
    // 정렬된 거리 배열 distance 의 각각의 요소에 n 을 더해 answer 에 저장합니다.
    const answer = distance.map(x => n + x);
    
    // 중복되는 숫자를 판별하기 위한 변수 입니다. 기존에 생성한 거리 배열내에 없는 값으로 설정합니다.
    let pre = Math.max(distance) + 1;
    
    for (let i = 0; i < answer.length; i++) {
        // 생성한 배열을 순회하면서 해당 인덱스의 숫자가 이전 인덱스의 숫자와 동일할 경우 같은 거리를 갖는 작은 값으로 설정합니다.
        // or 해당 인덱스의 숫자가 주어진 숫자 배열에 없는 숫자일 경우 같은 거리를 갖는 작은 값으로 설정합니다.
        if (answer[i] === pre || !numlist.includes(answer[i])) {
            answer[i] -= (answer[i] - n) * 2;
        }
        pre = answer[i];
    }

    return answer;
}