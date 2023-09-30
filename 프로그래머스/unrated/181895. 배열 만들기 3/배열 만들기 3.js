function solution(arr, intervals) {
    let result = [];
    for([a,b] of intervals){
        for(let i=a;i<=b;i++){
            result.push(arr[i]);
        }
    }
    return result;
}