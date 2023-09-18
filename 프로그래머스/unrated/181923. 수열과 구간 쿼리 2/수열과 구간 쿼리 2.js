function solution(arr, queries) {
    let answer = [];
    for([s,e,k] of queries){
        let nums = [];
        for(let i=s;i<=e;i++){
            if(arr[i]>k){
                nums.push(arr[i]);
            }
        }
        
        if(nums.length===0){
            answer.push(-1);
        }else{
            answer.push(Math.min(...nums));
        }
    }
    return answer;
}