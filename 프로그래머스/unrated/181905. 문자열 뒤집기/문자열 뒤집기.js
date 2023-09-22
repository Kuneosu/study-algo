function solution(my_string, s, e) {
    let result = [];
    for(let i=0;i<s;i++){
        result.push(my_string[i]);
    }
    for(let i=e;i>=s;i--){
        result.push(my_string[i]);
    }
    for(let i=e+1;i<my_string.length;i++){
        result.push(my_string[i]);
    }
    return result.join('');
}