function solution(num_list) {
    let mul=1;
    let sum_s=0;
    for(let num of num_list){
        mul *= num;
        sum_s += num;
    }
    sum_s = sum_s**2;
    if(mul<sum_s){
        return 1;
    }else{
        return 0;
    }
    
}