function solution(arr) {
    let arr_prev = [];
    let count = 0;
    while([...arr_prev].toString()!=[...arr].toString()){
        arr_prev = arr.slice();
        for(let i=0;i<arr.length;i++){
            let num = arr[i];
            if(num>=50 && num%2===0){
                arr[i] = num/2;
            }else if(num<50 && num%2!=0){
                arr[i] = (num*2)+1;
            }
        }
        count +=1;
    }
    return count-1;
}