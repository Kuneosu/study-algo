function solution(num_list) {
    let odd = [];
    let even = [];
    for(let num of num_list){
        if(num%2==0){
            even.push(num);
        }else{
            odd.push(num);
        }
    }
    let e_num = parseInt(even.join(''));
    let o_num = parseInt(odd.join(''));
    
    return e_num+o_num;
}