function solution(arr, query) {
    for(let i=0;i<query.length;i++){
        if(i%2===0){
            // 짝수 인덱스
            arr.splice(query[i]+1);
        }else{
            // 홀수 인덱스
            arr = arr.splice(query[i]);
        }
    }
    return arr;
}