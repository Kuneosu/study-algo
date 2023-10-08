function solution(arr) {
    let check = true;
    let i = 0;
    while(check){
        if(arr.length<=2**i){
            while(arr.length!=2**i){
                arr.push(0);
            }
            return arr;
            check = false;
        }else{
            i += 1;
        }
    }
}