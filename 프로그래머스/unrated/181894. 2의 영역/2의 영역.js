function solution(arr) {
    let result = [];
    if(arr.includes(2)){
        let a = arr.indexOf(2);
        let b = arr.lastIndexOf(2);
        for(let i=a;i<=b;i++){
            result.push(arr[i]);
        }
        return result;
    }else{
        return [-1];
    }
}