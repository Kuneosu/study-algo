function solution(intStrs, k, s, l) {
    let answer=[];
    for(str of intStrs){
        let num = parseInt(str.substr(s,l));
        if(num>k){
            answer.push(num);
        }
    }
    return answer;
}