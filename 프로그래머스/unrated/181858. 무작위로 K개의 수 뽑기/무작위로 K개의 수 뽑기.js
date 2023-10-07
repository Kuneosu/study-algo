function solution(arr, k) {
    const set_arr = new Set(arr);
    let result = Array.from(set_arr);
    if(result.length<k){
        while(result.length!=k){
            result.push(-1);
        }
    }else if(result.length>k){
        while(result.length!=k){
            result.pop();
        }
    }
    return result;
}