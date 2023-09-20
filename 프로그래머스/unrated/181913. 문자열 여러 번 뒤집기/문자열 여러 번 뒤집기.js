function solution(my_string, queries) {
    let answer = [];
    for([s,e] of queries){
        for(let i=0;i<s;i++){
            answer.push(my_string[i]);
        }
        for(let i=e;i>=s;i--){
            answer.push(my_string[i]);
        }
        for(let i=e+1;i<my_string.length;i++){
            answer.push(my_string[i]);
        }
        my_string = answer.join('');
        answer = [];
    }
    return my_string;
}