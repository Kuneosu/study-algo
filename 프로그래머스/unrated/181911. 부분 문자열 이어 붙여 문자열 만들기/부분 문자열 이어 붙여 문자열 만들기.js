function solution(my_strings, parts) {
    let answer = [];
    let i = 0;
    for([s,e] of parts){
        let word = my_strings[i];
        answer.push(word.substr(s,e-s+1));
        i += 1;
    }
    return answer.join('');
}