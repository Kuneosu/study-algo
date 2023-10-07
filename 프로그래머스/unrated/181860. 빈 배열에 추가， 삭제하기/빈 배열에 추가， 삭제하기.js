function solution(arr, flag) {
    let result = [];
    for(let i=0;i<flag.length;i++){
        if(flag[i]){
            for(let x=0;x<arr[i]*2;x++){
                result.push(arr[i]);
            }
        }else{
            for(let x=0;x<arr[i];x++){
                result.pop();
            }
        }
    }
    return result;
}