function solution(n) {
    let answer = 0;
    let nums = [];
    let num = 1;
    let check = 0;
    while(true){
        check = 0;
        if(num%3!==0){
            check += 1;
        }
        if(!((num.toString()).includes('3'))){
            check +=1;
        }
        if(check===2){
            nums.push(num);
        }
        num += 1;
        if(nums.length===100){
            break;
        }
    }
    return nums[n-1];
}