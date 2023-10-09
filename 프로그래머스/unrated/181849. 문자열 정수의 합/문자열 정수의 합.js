function solution(num_str) {
    let sum =0;
    const num_list = num_str.split('');
    for(num of num_list){
        sum += parseInt(num);
    }
    return sum;
}