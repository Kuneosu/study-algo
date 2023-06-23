function solution(arr, k) {
    let result = [];
    let array = new Set(arr);
    array = [...array];
    for(let i=0;i<k;i++){
        result.push(-1)
    }
    let count = k >= array.length ? array.length : k
    for(let i=0;i<count;i++){
        if(!result.includes(array[i])){
            result[i] = array[i];
        }
    }
    
    // if(result.length>k){
    //     result = result.slice(0,k)
    // }
    return result;
}