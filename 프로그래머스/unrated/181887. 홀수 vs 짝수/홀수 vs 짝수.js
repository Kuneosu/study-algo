function solution(num_list) {
    let odd_sum = 0;
    let even_sum = 0;
    for(let i=1;i<=num_list.length;i++){
        if(i%2===0){
            even_sum += num_list[i-1];
        }else{
            odd_sum += num_list[i-1];
        }
    }
    return odd_sum>=even_sum ? odd_sum : even_sum;
    
}