function solution(arr) {
    let stk = [];
    for(let i=0;i<arr.length;i++){
        if(stk.length===0){
            stk.push(arr[i]);
        }else if(arr[i]===stk[stk.length-1]){
            stk.pop();
        }else{
            stk.push(arr[i]);
        }
    }
    return stk.length>0 ? stk : [-1];
}