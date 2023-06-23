function solution(n) {
    let nums = [];
    let num = 1;
    while(true){
        if(num%3!==0 && !((num.toString()).includes('3'))){
            nums.push(num);
        }
        num += 1;
        if(nums.length===100){
            break;
        }
    }
    return nums[n-1];
}