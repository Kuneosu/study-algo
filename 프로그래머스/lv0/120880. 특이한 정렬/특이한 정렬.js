function solution(numlist,n){
    const distance = (numlist.map(x => Math.abs(n - x))).sort((a,b)=>{return a-b;});
    const answer = distance.map(x => n + x);
    let pre = Math.max(distance) + 1;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === pre || !numlist.includes(answer[i])) {
            answer[i] -= (answer[i] - n) * 2;
        }
        pre = answer[i];
    }

    return answer;
}